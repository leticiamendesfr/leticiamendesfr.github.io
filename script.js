const $ = selector => document.querySelector(selector);
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let editing = false;
let selectedMedia = '';
let toastTimer;
let activeProject;
const mediaURLs = new Map();
const dbReady = new Promise((resolve, reject) => {
  const request = indexedDB.open('leticia-portfolio-media', 1);
  request.onupgradeneeded = () => request.result.createObjectStore('images', {keyPath:'id'});
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});
dbReady.catch(() => {});
const notify = text => { clearTimeout(toastTimer); $('#media-status').textContent = text; $('#media-status').hidden = false; toastTimer = setTimeout(() => $('#media-status').hidden = true, 5500); };
async function records() {
  const db = await dbReady;
  return new Promise((resolve,reject) => { const request = db.transaction('images').objectStore('images').getAll(); request.onsuccess=()=>resolve(request.result); request.onerror=()=>reject(request.error); });
}
async function saveMedia(record) {
  const db = await dbReady;
  return new Promise((resolve,reject) => { const tx=db.transaction('images','readwrite'); tx.objectStore('images').put(record); tx.oncomplete=resolve; tx.onerror=()=>reject(tx.error); tx.onabort=()=>reject(tx.error); });
}
function renderMedia() {
  document.querySelectorAll('[data-media]').forEach(slot => {
    const id=slot.dataset.media;
    const url=mediaURLs.get(id)||publishedMedia[id];
    if(!url) return;
    let image=slot.querySelector('img');
    if(!image) { image=document.createElement('img'); image.alt=id==='portrait'?'Foto de Letícia Mendes':(slot.dataset.caption||'Imagem do projeto'); slot.prepend(image); }
    image.src=url;
    if(slot.classList.contains('gallery-slot')){
      const caption=slot.closest('figure').querySelector('figcaption');
      let open=caption.querySelector('a');if(!open){open=document.createElement('a');open.textContent='Ampliar imagem ↗';open.target='_blank';open.rel='noopener noreferrer';caption.append(open);}open.href=url;
    }
    slot.querySelector('.portrait-placeholder')?.setAttribute('hidden','');
    slot.querySelector('.gallery-placeholder')?.setAttribute('hidden','');
  });
}
function setEditing(value) { editing=value; document.body.classList.toggle('editing',value); $('#editor-notice').hidden=!value; $('#edit-images').setAttribute('aria-pressed',String(value)); $('#edit-images').textContent=value?'Concluir edição':'Editar imagens'; document.querySelector('[data-window="edit"]')?.setAttribute('aria-pressed',String(value)); }
$('#edit-images').addEventListener('click',()=>setEditing(!editing));
$('#close-editor').addEventListener('click',()=>setEditing(false));
const galleryIcon='<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="5" y="7" width="30" height="26" rx="2"/><circle cx="14" cy="16" r="3"/><path d="m6 29 10-9 6 6 5-4 8 8"/></svg>';
function renderProject(id) {
  const p=projects[id];
  if(!p) { location.hash='projetos'; return; }
  activeProject=id;
  $('#project-view').innerHTML=`<article class="project-detail"><a class="back-link" href="#projetos">← Todos os projetos</a><header class="detail-title"><p>${escapeHTML(p.category)}</p><h1 tabindex="-1">${escapeHTML(p.title)}</h1><p>${escapeHTML(p.intro)}</p></header><dl class="detail-facts"><div><dt>Tipo</dt><dd>${escapeHTML(p.type)}</dd></div><div><dt>Contexto</dt><dd>${escapeHTML(p.context)}</dd></div><div><dt>Estado atual</dt><dd>${escapeHTML(p.status)}</dd></div></dl><div class="detail-tabs" role="tablist" aria-label="Detalhes do projeto"><button id="tab-overview" role="tab" data-tab="overview" aria-controls="panel-overview" aria-selected="true">Visão geral</button><button id="tab-architecture" role="tab" data-tab="architecture" aria-controls="panel-architecture" aria-selected="false" tabindex="-1">Arquitetura</button><button id="tab-gallery" role="tab" data-tab="gallery" aria-controls="panel-gallery" aria-selected="false" tabindex="-1">Galeria</button></div><section class="detail-panel" id="panel-overview" role="tabpanel" aria-labelledby="tab-overview">${p.sections.map(([title,text])=>`<section class="case-section"><h2>${escapeHTML(title)}</h2><p>${escapeHTML(text)}</p></section>`).join('')}<ul class="tech-list">${p.tags.map(tag=>`<li>${escapeHTML(tag)}</li>`).join('')}</ul>${p.link?`<a class="button secondary" style="margin-top:24px" href="${p.link}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.linkText)} ↗</a>`:''}<p class="case-note">${escapeHTML(p.note)}</p></section><section class="detail-panel" id="panel-architecture" role="tabpanel" aria-labelledby="tab-architecture" hidden><h2>Arquitetura da solução</h2><div class="architecture-image" data-media="${id}-architecture" style="position:relative"><img src="${p.diagram}" alt="Diagrama da arquitetura do projeto ${escapeHTML(p.title)}"><button class="media-edit" data-upload="${id}-architecture">Substituir diagrama</button></div><p class="architecture-caption">${escapeHTML(p.diagramCaption)}</p><a class="zoom-link" href="${p.diagram}" target="_blank" rel="noopener noreferrer">Abrir diagrama em tamanho maior ↗</a><div class="architecture-steps">${p.architecture.map(([title,text])=>`<div><h3>${escapeHTML(title)}</h3><p>${escapeHTML(text)}</p></div>`).join('')}</div></section><section class="detail-panel" id="panel-gallery" role="tabpanel" aria-labelledby="tab-gallery" hidden><h2>Imagens do projeto</h2><p class="gallery-intro">Telas, resultados e registros do desenvolvimento.</p><div class="gallery-grid">${p.gallery.map((caption,index)=>`<figure class="gallery-item"><div class="gallery-slot" data-media="${id}-${index+1}" data-caption="${escapeHTML(caption)}"><div class="gallery-placeholder">${galleryIcon}<span>Captura a adicionar</span></div><button class="media-edit" data-upload="${id}-${index+1}">Adicionar imagem</button></div><figcaption>${escapeHTML(caption)}</figcaption></figure>`).join('')}</div><p class="gallery-tip">Use “Editar imagens” para testar suas fotos e capturas nesta prévia. ${escapeHTML(p.note)}</p></section></article>`;
  $('#project-view .project-detail').classList.add('project-window-body');
  const brief=p.brief;
  if(brief){const summary=document.createElement('section');summary.className='project-brief';summary.setAttribute('aria-label','Resumo do projeto');summary.innerHTML='<div class="brief-problem"><p class="brief-label">01 / O PROBLEMA</p><h2>'+escapeHTML(brief.problem)+'</h2></div><div><p class="brief-label">02 / A ENTREGA</p><p>'+escapeHTML(brief.delivery)+'</p></div><div><p class="brief-label">03 / O PROCESSO</p><p class="brief-process">'+escapeHTML(brief.focus)+'</p></div><div><p class="brief-label">04 / APRENDIZADO</p><p>'+escapeHTML(brief.learning)+'</p></div>';$('#panel-overview').prepend(summary);}
  const evidence=`<section class="case-evidence"><h2>Decisões de construção</h2><div class="decision-grid">${(p.decisions||[]).map(([title,text])=>`<div><h3>${escapeHTML(title)}</h3><p>${escapeHTML(text)}</p></div>`).join('')}</div><h2>Validação e evidências</h2><dl class="validation-list">${(p.validation||[]).map(([title,text])=>`<div><dt>${escapeHTML(title)}</dt><dd>${escapeHTML(text)}</dd></div>`).join('')}</dl><h2>Arquivos do projeto</h2><div class="case-resources">${(p.resources||[]).map(([label,url])=>`<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} <span aria-hidden="true">↗</span></a>`).join('')}</div></section>`;
  $('#panel-overview .case-note').insertAdjacentHTML('beforebegin',evidence);
  const flow=document.createElement('div');flow.className='flow-explorer';flow.innerHTML=`<p class="flow-label">Explore o caminho do dado</p><div class="flow-controls">${p.architecture.map(([label],index)=>`<button type="button" data-flow-step="${index}" aria-pressed="${index===0}"><span>${index+1}</span>${escapeHTML(label)}</button>`).join('')}</div><div class="flow-track" aria-hidden="true"><i></i></div><p class="flow-description" role="status">${escapeHTML(p.architecture[0][1])}</p>`;$('#panel-architecture .architecture-image').before(flow);
  $('#project-view').insertAdjacentHTML('afterbegin',`<div class="titlebar project-titlebar" tabindex="0" aria-label="Barra da janela; use as setas para mover no computador"><span>${escapeHTML(p.title.toUpperCase())}</span><span class="titlebar-lines" aria-hidden="true"></span><div class="window-controls"><button class="window-button" data-window="edit" aria-label="Editar imagens do projeto" aria-pressed="${editing}">✎</button><button class="window-button" data-window="minimize" aria-label="Minimizar projeto">_</button><button class="window-button" data-window="reset" aria-label="Centralizar janela">▣</button><button class="window-button" data-window="close" aria-label="Fechar projeto">×</button></div></div>`);
  renderMedia();
  window.dispatchEvent(new Event('portfolio:project-rendered'));
  document.title=`${p.title} | Letícia Mendes`;
}
function selectTab(id, focus=false) {
  document.querySelectorAll('[data-tab]').forEach(button=> { const selected=button.dataset.tab===id; button.setAttribute('aria-selected',String(selected)); button.tabIndex=selected?0:-1; if(selected&&focus) button.focus(); });
  document.querySelectorAll('[role=tabpanel]').forEach(panel=>panel.hidden=panel.id!==`panel-${id}`);
}
document.addEventListener('click',event=>{
  const homeLink=event.target.closest('a[href="#inicio"]');if(homeLink){event.preventDefault();history.pushState(null,'','#inicio');route();}
  const tab=event.target.closest('[data-tab]'); if(tab) selectTab(tab.dataset.tab);
  const upload=event.target.closest('[data-upload]'); if(upload&&editing){selectedMedia=upload.dataset.upload;$('#media-input').value='';$('#media-input').click();}
  const flowStep=event.target.closest('[data-flow-step]');if(flowStep&&activeProject){const index=Number(flowStep.dataset.flowStep),p=projects[activeProject];document.querySelectorAll('[data-flow-step]').forEach(b=>b.setAttribute('aria-pressed',String(b===flowStep)));$('.flow-description').textContent=p.architecture[index][1];$('.flow-track').style.setProperty('--flow-progress',`${(index+1)/p.architecture.length*100}%`);}
});
document.addEventListener('keydown',event=>{
  const tab=event.target.closest('[data-tab]'); if(!tab) return;
  const tabs=[...document.querySelectorAll('[data-tab]')]; let index=tabs.indexOf(tab);
  if(event.key==='ArrowRight') index=(index+1)%tabs.length; else if(event.key==='ArrowLeft') index=(index+tabs.length-1)%tabs.length; else if(event.key==='Home') index=0; else if(event.key==='End') index=tabs.length-1; else return;
  event.preventDefault();selectTab(tabs[index].dataset.tab,true);
});
function route() {
  const hash=location.hash.slice(1)||'inicio';
  const isProject=hash.startsWith('projeto/');
  $('#home-view').hidden=false;
  document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===(isProject?'projetos':hash)));
  if(isProject){const id=hash.split('/')[1];if(!projects[id]){location.hash='projetos';return;}renderProject(id);$('#project-view').hidden=false;if(!$('#project-view').open)$('#project-view').showModal();$('#project-view').style.removeProperty('--drag-x');$('#project-view').style.removeProperty('--drag-y');$('#project-view h1')?.focus({preventScroll:true});window.desktopUI?.projectOpened(activeProject);}
  else { activeProject=null;if($('#project-view').open)$('#project-view').close();$('#project-view').hidden=true;window.desktopUI?.projectClosed();document.title='Letícia Mendes | Portfólio';if(hash==='inicio')window.scrollTo({top:0,behavior:'instant'});else document.getElementById(hash)?.scrollIntoView(); }
}
window.addEventListener('hashchange',route);
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  document.querySelectorAll('[data-category]').forEach(card=>card.hidden=filter!=='todos'&&card.dataset.category!==filter);
  const count=[...document.querySelectorAll('[data-category]')].filter(card=>!card.hidden).length;
  $('.project-count').textContent=`${count} ${count===1?'arquivo':'arquivos'}`;
}));
$('#media-input').addEventListener('change',async event=>{
  const file=event.target.files[0]; if(!file) return;
  if(!['image/jpeg','image/png','image/webp'].includes(file.type)){notify('Escolha uma imagem JPG, PNG ou WebP.');return;}
  if(file.size>8*1024*1024){notify('Use uma imagem de até 8 MB.');return;}
  try {
    const bitmap=await createImageBitmap(file);bitmap.close();
    await saveMedia({id:selectedMedia,blob:file,name:file.name,type:file.type});
    if(mediaURLs.has(selectedMedia)) URL.revokeObjectURL(mediaURLs.get(selectedMedia));
    mediaURLs.set(selectedMedia,URL.createObjectURL(file));renderMedia();notify('Imagem salva nesta prévia. Baixe o arquivo de imagens para incorporar à publicação.');
  }catch{notify('Não foi possível salvar a imagem. Confira o arquivo e o espaço do navegador.');}
});
$('#export-media').addEventListener('click',async()=>{
  try {
    const images=await records();if(!images.length){notify('Adicione uma foto ou captura antes de baixar.');return;}
    const data=await Promise.all(images.map(async record=>({id:record.id,name:record.name,type:record.type,data:await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(record.blob);})})));
    const url=URL.createObjectURL(new Blob([JSON.stringify({format:'leticia-portfolio-media-v1',images:data})],{type:'application/json'}));
    const a=document.createElement('a');a.href=url;a.download='leticia-portfolio-imagens.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Arquivo de imagens preparado para download.');
  }catch{notify('Não foi possível baixar as imagens deste navegador.');}
});
records().then(images=>{images.forEach(record=>mediaURLs.set(record.id,URL.createObjectURL(record.blob)));renderMedia();}).catch(()=>{});
route();
window.addEventListener('load',()=>{if(!location.hash||location.hash==='#inicio')window.scrollTo({top:0,behavior:'instant'});});
