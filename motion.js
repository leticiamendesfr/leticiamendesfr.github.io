// Rolagem nativa: progresso e composição respondem ao deslocamento, sem prender a roda.
(() => {
  const root=document.documentElement;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.prepend(progress);
  const allowed=()=>!root.classList.contains('motion-off')&&!reduce.matches;
  let ticking=false;
  function frame(){
    ticking=false;const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;
    root.style.setProperty('--reading-progress',max>0?Math.min(1,y/max):0);
    const on=allowed();root.classList.toggle('motion-enabled',on);
    root.style.setProperty('--hero-shift',on?`${Math.min(85,y*.14)}px`:'0px');
    root.style.setProperty('--profile-shift',on?`${-Math.min(60,y*.10)}px`:'0px');
    root.style.setProperty('--hero-opacity',on?Math.max(.35,1-y/1100):1);
    if(!document.querySelector('#project-view').open){
      let current='inicio';for(const id of ['inicio','sobre','projetos']){const section=document.getElementById(id);if(section&&section.getBoundingClientRect().top<innerHeight*.48)current=id;}
      document.querySelectorAll('[data-nav]').forEach(link=>{if(link.dataset.nav===current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
    }
  }
  const request=()=>{if(!ticking){ticking=true;requestAnimationFrame(frame);}};
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');observer.unobserve(entry.target);}}),{threshold:.08,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.section-heading,.project-card,.about-window,.contact-section').forEach((element,index)=>{element.classList.add('scroll-reveal');element.style.setProperty('--reveal-delay',`${element.classList.contains('project-card')?(index%3)*75:0}ms`);observer.observe(element);});
  window.addEventListener('scroll',request,{passive:true});window.addEventListener('resize',request);window.addEventListener('portfolio:motion',request);reduce.addEventListener('change',request);window.addEventListener('hashchange',request);
  window.addEventListener('portfolio:project-rendered',()=>{const modal=document.querySelector('.project-window-body');const update=()=>{const max=modal.scrollHeight-modal.clientHeight;document.querySelector('#project-view').style.setProperty('--case-progress',max>0?modal.scrollTop/max:0);};modal.addEventListener('scroll',update,{passive:true});update();});
  frame();
})();

// O próprio desenho do título é composto por faixas; não há sombra RGB duplicada.
function prepareGlitchTitles(){
  document.querySelectorAll('#intro-title,.section-heading h2,.contact-section h2,.detail-title h1').forEach(title=>{
    if(title.dataset.sliced)return;
    const text=[...title.childNodes].map(node=>node.nodeName==='BR'?'\n':node.textContent).join('');
    title.classList.add('glitch-title','sliced-title');title.dataset.sliced='true';
    title.setAttribute('aria-label',text.replace(/\s+/g,' '));
    title.replaceChildren();
    text.split('\n').forEach((line,index)=>{
      const word=document.createElement('span');word.className='glitch-word';word.setAttribute('aria-hidden','true');word.style.setProperty('--line-index',index);
      const measure=document.createElement('span');measure.className='glitch-measure';measure.textContent=line;word.append(measure);
      for(let band=0;band<5;band++){
        const slice=document.createElement('span');slice.className=`letter-slice slice-${band}`;slice.textContent=line;
        slice.style.setProperty('--band-top',`${band*20}%`);slice.style.setProperty('--band-bottom',`${(4-band)*20}%`);word.append(slice);
      }
      title.append(word);
    });
  });
}
prepareGlitchTitles();
window.addEventListener('portfolio:project-rendered',prepareGlitchTitles);
