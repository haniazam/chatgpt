const DATA_B64=window.FLAT_DATA_B64;
async function decodeItems(){
  const bytes=Uint8Array.from(atob(DATA_B64),c=>c.charCodeAt(0));
  if(!('DecompressionStream' in window)) throw new Error('This browser is too old for the checklist data loader.');
  const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return JSON.parse(await new Response(stream).text());
}
const stageNames = {now:'Buy now',week:'This week',later:'Later / conditional',covered:'Already covered',agent:'Agent / landlord',skip:'Do not buy'};
async function boot(){
const ITEMS=await decodeItems();
const stageOrder = ['now','week','later','covered','agent','skip'];
const key = 'new-flat-setup-v2';
let saved = {};
try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch(e) { saved = {}; }
let currentStage = 'minimum';
let currentCategory = 'all';
let search = '';
let hideDone = false;
let minimumOnly = false;

const list = document.getElementById('list');
const category = document.getElementById('category');
const searchBox = document.getElementById('search');
const toast = document.getElementById('toast');

const categories = [...new Set(ITEMS.map(x=>x.category))].sort((a,b)=>a.localeCompare(b));
for (const c of categories) { const o=document.createElement('option');o.value=c;o.textContent=c;category.appendChild(o); }

function esc(s='') { return String(s).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function showToast(msg) { toast.textContent=msg;toast.classList.add('show');clearTimeout(showToast.t);showToast.t=setTimeout(()=>toast.classList.remove('show'),1800); }
function checked(id) { return !!saved[id]; }
function setChecked(id, value) { saved[id]=value; localStorage.setItem(key,JSON.stringify(saved)); render(); }

function matches(it) {
  if (currentStage === 'minimum' && !it.minimum) return false;
  if (currentStage !== 'all' && currentStage !== 'minimum' && it.stage !== currentStage) return false;
  if (currentCategory !== 'all' && it.category !== currentCategory) return false;
  if (minimumOnly && !it.minimum) return false;
  if (hideDone && checked(it.id)) return false;
  if (search) { const hay=[it.name,it.product,it.category,it.notes,it.reason,it.basis].join(' ').toLowerCase(); if(!hay.includes(search.toLowerCase())) return false; }
  return true;
}

function card(it) {
  const isDone=checked(it.id);
  const links=[];
  if (it.productUrl) links.push(`<a href="${esc(it.productUrl)}" target="_blank" rel="noopener">Open product</a>`);
  if (it.fastUrl && it.fastUrl !== it.productUrl) links.push(`<a href="${esc(it.fastUrl)}" target="_blank" rel="noopener">${esc(it.fastLabel || 'Order fast')}</a>`);
  return `<article class="item ${isDone?'done':''}" data-id="${esc(it.id)}">
    <button class="check" type="button" aria-label="${isDone?'Mark unchecked':'Mark checked'}" data-check="${esc(it.id)}">✓</button>
    <div>
      <div class="item-top"><h3>${esc(it.name)}</h3><span class="qty">${esc(it.qty)}</span></div>
      <div class="badges"><span class="badge ${esc(it.stage)}">${esc(stageNames[it.stage])}</span><span class="badge">${esc(it.category)}</span></div>
      ${it.product?`<p class="product">${esc(it.product)}</p>`:''}
      ${it.reason?`<p class="reason">${esc(it.reason)}</p>`:''}
      ${it.notes?`<p class="notes">${esc(it.notes)}</p>`:''}
      <p class="basis">${esc(it.basis)}</p>
      ${links.length?`<div class="item-actions">${links.join('')}</div>`:''}
    </div>
  </article>`;
}

function render() {
  const shown=ITEMS.filter(matches);
  list.innerHTML=shown.length?shown.map(card).join(''):'<div class="empty">No items match this view.</div>';
  document.querySelectorAll('[data-check]').forEach(b=>b.addEventListener('click',()=>setChecked(b.dataset.check,!checked(b.dataset.check))));
  const relevant=ITEMS.filter(x=>x.stage==='now'||x.stage==='week');
  const done=relevant.filter(x=>checked(x.id)).length;
  document.getElementById('progressText').textContent=`${done} of ${relevant.length} current-setup items checked`;
  document.getElementById('progressBar').style.width=`${relevant.length?done/relevant.length*100:0}%`;
}

function activateStage(stage) { currentStage=stage;minimumOnly=false;document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.stage===stage));render();document.getElementById('checklist').scrollIntoView({behavior:'smooth'}); }
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>activateStage(t.dataset.stage)));
searchBox.addEventListener('input',e=>{search=e.target.value;render();});
category.addEventListener('change',e=>{currentCategory=e.target.value;render();});
document.getElementById('hideDone').addEventListener('click',e=>{hideDone=!hideDone;e.target.textContent=hideDone?'Show checked':'Hide checked';render();});
document.getElementById('focusBtn').addEventListener('click',()=>{currentStage='all';minimumOnly=true;document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));render();document.getElementById('checklist').scrollIntoView({behavior:'smooth'});});
document.querySelectorAll('[data-filter-action="minimum"]').forEach(b=>b.addEventListener('click',()=>document.getElementById('focusBtn').click()));
document.querySelectorAll('[data-category-action]').forEach(b=>b.addEventListener('click',()=>{currentStage='all';minimumOnly=false;currentCategory=b.dataset.categoryAction;category.value=currentCategory;document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));render();document.getElementById('checklist').scrollIntoView({behavior:'smooth'});}));
document.querySelectorAll('[data-search-action]').forEach(b=>b.addEventListener('click',()=>{currentStage='all';minimumOnly=false;search=b.dataset.searchAction;searchBox.value=search;document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));render();document.getElementById('checklist').scrollIntoView({behavior:'smooth'});}));
document.getElementById('resetBtn').addEventListener('click',()=>{if(confirm('Clear all checklist ticks stored in this browser?')){saved={};localStorage.removeItem(key);render();showToast('Checklist reset');}});
document.getElementById('shareBtn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);showToast('Link copied');}catch(e){showToast('Copy the address from your browser');}});

const agentItems=ITEMS.filter(x=>x.stage==='agent');
document.getElementById('agentGrid').innerHTML=agentItems.map(x=>`<article class="agent-card"><h3>${esc(x.name)}</h3><p>${esc(x.reason)}</p><p>${esc(x.notes)}</p><p class="basis">${esc(x.basis)}</p></article>`).join('');
render();

}
boot().catch(err=>{
  console.error(err);
  const el=document.getElementById('list');
  if(el) el.innerHTML='<div class="empty">The interactive checklist could not load in this browser. Use a current version of Safari, Chrome, Edge or Firefox.</div>';
});
