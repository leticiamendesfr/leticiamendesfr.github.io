(() => {
  const projectWindow = document.querySelector('#project-view');
  const taskbar = document.querySelector('#taskbar-windows');
  const motionButton = document.querySelector('#motion-toggle');
  let savedProject = null;
  let savedView = null;
  let minimizing = false;
  let motion = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  try { if(localStorage.getItem('portfolio-motion')==='off')motion=false; }catch{}
  function setMotion(value) {
    motion=value;document.documentElement.classList.toggle('motion-off',!value);
    motionButton.setAttribute('aria-pressed',String(value));motionButton.textContent=`Animações: ${value?'on':'off'}`;
    try{localStorage.setItem('portfolio-motion',value?'on':'off');}catch{}
    window.dispatchEvent(new Event('portfolio:motion'));
  }
  setMotion(motion);
  motionButton.addEventListener('click',()=>setMotion(!motion));
  function updateTaskbar(id,open) {
    taskbar.replaceChildren();if(!id)return;
    const button=document.createElement('button');button.textContent=projects[id].title;button.setAttribute('aria-pressed',String(open));
    button.setAttribute('aria-label',`${open?'Minimizar':'Restaurar'} ${projects[id].title}`);
    button.addEventListener('click',()=>{if(projectWindow.open)minimize();else location.hash=`projeto/${id}`;});
    taskbar.append(button);
  }
  window.desktopUI={
    projectOpened(id){if(id===savedProject&&savedView){selectTab(savedView.tab);document.querySelector('.project-window-body').scrollTop=savedView.scroll;}else savedView=null;savedProject=id;updateTaskbar(id,true);},
    projectClosed(){if(minimizing){minimizing=false;updateTaskbar(savedProject,false);}else{savedProject=null;savedView=null;updateTaskbar(null,false);}}
  };
  if(activeProject)window.desktopUI.projectOpened(activeProject);
  function home(){history.pushState(null,'','#inicio');route();}
  function minimize(){if(!activeProject)return;minimizing=true;savedProject=activeProject;savedView={tab:document.querySelector('[data-tab][aria-selected="true"]').dataset.tab,scroll:document.querySelector('.project-window-body').scrollTop};home();document.querySelector('#taskbar-windows button')?.focus({preventScroll:true});}
  document.addEventListener('click',event=>{
    const action=event.target.closest('[data-window]')?.dataset.window;
    if(action==='minimize')minimize();
    if(action==='close'){home();document.querySelector('.hero-project-link')?.focus({preventScroll:true});}
    if(action==='reset'){projectWindow.style.removeProperty('--drag-x');projectWindow.style.removeProperty('--drag-y');}
    if(action==='edit')setEditing(!editing);
  });
  projectWindow.addEventListener('cancel',event=>{event.preventDefault();home();document.querySelector('.hero-project-link')?.focus({preventScroll:true});});
  function dismissStatus(){document.querySelector('#status-window').hidden=true;}
  document.querySelector('#close-status')?.addEventListener('click',dismissStatus);
  document.querySelector('#status-ok')?.addEventListener('click',()=>{dismissStatus();location.hash='projetos';});
  function moveWindow(dx,dy,initial){
    const width=projectWindow.offsetWidth,height=projectWindow.offsetHeight;
    const baseLeft=(innerWidth-width)/2,baseTop=innerHeight*.06;
    const minX=8-baseLeft,maxX=innerWidth-width-8-baseLeft;
    const minY=8-baseTop,maxY=Math.max(8,innerHeight-height-56)-baseTop;
    const x=Math.max(minX,Math.min(maxX,initial.x+dx)),y=Math.max(minY,Math.min(maxY,initial.y+dy));
    projectWindow.style.setProperty('--drag-x',`${x}px`);projectWindow.style.setProperty('--drag-y',`${y}px`);
  }
  const offset=()=>({x:parseFloat(projectWindow.style.getPropertyValue('--drag-x'))||0,y:parseFloat(projectWindow.style.getPropertyValue('--drag-y'))||0});
  let drag;
  document.addEventListener('pointerdown',event=>{
    const bar=event.target.closest('.project-titlebar');
    if(!bar||event.target.closest('button')||innerWidth<=700||event.button!==0)return;
    drag={pointer:event.pointerId,x:event.clientX,y:event.clientY,initial:offset(),bar};bar.setPointerCapture(event.pointerId);event.preventDefault();
  });
  document.addEventListener('pointermove',event=>{if(drag&&drag.pointer===event.pointerId)moveWindow(event.clientX-drag.x,event.clientY-drag.y,drag.initial);});
  const release=()=>{drag=null;};document.addEventListener('pointerup',release);document.addEventListener('pointercancel',release);
  document.addEventListener('keydown',event=>{
    if(!event.target.matches('.project-titlebar')||innerWidth<=700)return;
    const delta={ArrowLeft:[-15,0],ArrowRight:[15,0],ArrowUp:[0,-15],ArrowDown:[0,15]}[event.key];
    if(delta){event.preventDefault();moveWindow(...delta,offset());}
  });
  window.addEventListener('resize',()=>{projectWindow.style.removeProperty('--drag-x');projectWindow.style.removeProperty('--drag-y');});
  const clock=document.querySelector('#desktop-clock');
  const tick=()=>{clock.textContent=new Intl.DateTimeFormat('pt-BR',{hour:'2-digit',minute:'2-digit',timeZone:'America/Sao_Paulo'}).format(new Date());clock.dateTime=new Date().toISOString();};tick();setInterval(tick,30000);
  const boot=document.querySelector('#boot-notice');
  const finishBoot=()=>{boot.hidden=true;try{sessionStorage.setItem('portfolio-started','yes');}catch{}};
  document.querySelector('#skip-boot').addEventListener('click',finishBoot);
  let started=false;try{started=sessionStorage.getItem('portfolio-started')==='yes';}catch{}
  if(!started&&motion&&!activeProject){boot.hidden=false;setTimeout(finishBoot,1000);}
})();
