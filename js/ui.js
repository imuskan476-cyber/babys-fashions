// Page UI: menu, product cards, product popup, add-to-cart animation, search and checkout.
// overlays
const show=(el,on)=>{el.classList.toggle('on',on);document.body.classList.toggle('lock',$$('.ov.on').length>0);if(on){const f=el.querySelector('input,button,.x');f&&f.focus({preventScroll:true})}};
addEventListener('keydown',e=>{if(e.key==='Escape')$$('.ov.on').reverse()[0]&&show($$('.ov.on').reverse()[0],false)});
// render
const card=p=>`<article class="pc">${p.isNew?'<span class="nw">New</span>':''}<button class="hz" aria-pressed="false" aria-label="Save ${p.name}">♡</button><button class="pb" data-open="${p.id}" aria-label="View ${p.name}"><div class="pi">${pim(p)}</div><div class="pn">${p.name}<div class="pp"><span>${money(p.price)} <s>${money(p.old)}</s></span><span class="go">↗</span></div></div></button></article>`;
let tab='all';
function renderGrid(){const l=POPULAR.filter(p=>tab==='all'||p.cat.includes(tab));$('#grid').innerHTML=l.map(card).join('')||'<p>No shoes here yet.</p>';
 $('#tabs').innerHTML=[['all','All'],['boys','Boys'],['girls','Girls']].map(([t,l])=>`<button data-t="${t}" aria-pressed="${t===tab}">${l}</button>`).join('')}
$('#hi').src=HERO;$('#bi').src=BAN;$('#trk').innerHTML=POPULAR.map(card).join('');renderGrid();
$('#th').innerHTML=['night','wave','mid'].map(id=>`<button data-open="${id}" aria-label="View ${byId(id).name}">${pim(byId(id))}</button>`).join('');
const step=d=>$('#trk').scrollBy({left:d*$('#trk').clientWidth*.8,behavior:RM?'auto':'smooth'});$('#pv').onclick=()=>step(-1);$('#nx').onclick=()=>step(1);
document.addEventListener('click',e=>{const t=e.target.closest('[data-t]'),o=e.target.closest('[data-open]'),h=e.target.closest('.hz');
 if(t){tab=t.dataset.t;renderGrid();$('#best').scrollIntoView({behavior:RM?'auto':'smooth'})}else if(h){const on=h.getAttribute('aria-pressed')!=='true';h.setAttribute('aria-pressed',on);h.textContent=on?'♥':'♡'}else if(o){show($('#search'),false);openProduct(o.dataset.open,o)}
 if(e.target.closest('#mm a'))closeMenu()});
const closeMenu=()=>{$('#mm').classList.remove('on');$('#bm').setAttribute('aria-expanded','false');document.body.classList.remove('lock')};
$('#bm').onclick=()=>{const o=$('#mm').classList.toggle('on');$('#bm').setAttribute('aria-expanded',o);document.body.classList.toggle('lock',o)};
// product
let P=null,sel={};
function paintP(){const p=P;$('#mn').textContent=p.name;$('#mc').textContent=p.cat.join(' / ');$('#mp').textContent=money(p.price);$('#mo').textContent=money(p.old);$('#mcl').textContent=sel.c;
 const mg=$('#mimg');mg.src=p.img||PHOTO;mg.alt=p.name+(p.img?'':' in '+sel.c);mg.style.filter=p.img?'none':COLORS[sel.c].f;mg.style.borderRadius=p.img?'8px':'';mg.style.maxHeight=p.img?'70vh':'';mg.style.objectFit=p.img?'cover':'';$('#mcw').style.display=$('#msw').style.display=p.img?'none':'';
 $('#msw').innerHTML=(p.img?[]:p.colors).map(c=>`<button style="background:${COLORS[c].hex}" data-c="${c}" aria-label="${c}" aria-pressed="${c===sel.c}"></button>`).join('');
 $('#msz').innerHTML=sizes(p).map(s=>`<button data-s="${s}" aria-pressed="${s===sel.s}">${s}</button>`).join('')}
$('#msw').onclick=e=>{const b=e.target.closest('button');if(!b)return;sel.c=b.dataset.c;paintP();if(!RM)$('#mimg').animate([{opacity:.25},{opacity:1}],{duration:450})};
$('#msz').onclick=e=>{const b=e.target.closest('button');if(!b)return;sel.s=+b.dataset.s;$$('#msz button').forEach(x=>x.setAttribute('aria-pressed',x===b))};
function openProduct(id,src){P=byId(id);sel={c:P.colors[0],s:null};paintP();const pm=$('#pm');show(pm,true);pm.scrollTop=0;
 if(!RM&&src){const a=src.getBoundingClientRect(),b=$('#box').getBoundingClientRect();$('#box').animate([{transform:`translate(${a.left+a.width/2-b.left-b.width/2}px,${a.top+a.height/2-b.top-b.height/2}px) scale(${Math.min(a.width/b.width,.5)})`,opacity:0},{transform:'none',opacity:1}],{duration:480,easing:'cubic-bezier(.2,.8,.2,1)'});pm.animate([{opacity:0},{opacity:1}],{duration:300})}}
$('#pmx').onclick=()=>show($('#pm'),false);$('#pm').onclick=e=>{if(e.target.id==='pm')show($('#pm'),false)};
$('#add').onclick=()=>{const b=$('#add');if(!sel.s){toast('Please choose a size');$('#msz').animate([{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'none'}],{duration:300});return}
 const f=cart.find(i=>i.id===P.id&&i.c===sel.c&&i.s===sel.s);f?f.q++:cart.push({id:P.id,c:sel.c,s:sel.s,q:1});renderCart();toast('Added to cart');
 if(RM){return}b.animate([{transform:'scale(.96)'},{transform:'none'}],{duration:300});
 const a=b.getBoundingClientRect(),t=$('#bc').getBoundingClientRect(),fl=document.createElement('div');fl.className='fly';fl.innerHTML=pim(P,sel.c);document.body.append(fl);
 fl.animate([{transform:`translate(${a.left+a.width/2-40}px,${a.top-20}px) scale(1)`,opacity:1},{transform:`translate(${t.left-20}px,${t.top-10}px) scale(.25)`,opacity:.6}],{duration:750,easing:'cubic-bezier(.6,0,.9,.4)'}).onfinish=()=>{fl.remove();$('#bc').animate([{transform:'scale(1.3)'},{transform:'none'}],{duration:350})}};
const openCart=()=>show($('#cart'),true);$('#bc').onclick=openCart;$('#cx').onclick=()=>show($('#cart'),false);$('#cart').onclick=e=>{if(e.target.id==='cart')show($('#cart'),false)};
// search
const rs=q=>{q=q.trim().toLowerCase();const l=[...new Set(PRODUCTS.concat(POPULAR))].filter(p=>!q||(p.name+p.cat.join(' ')+p.colors.join(' ')).toLowerCase().includes(q));$('#sr').innerHTML=l.length?l.map(p=>`<button data-open="${p.id}"><span>${p.name} <span class="mut">${p.cat.join(', ')}</span></span><b>${money(p.price)}</b></button>`).join(''):'<p class="mut">No shoes found. Try "boys" or "blue".</p>'};
$('#bs').onclick=()=>{show($('#search'),true);rs('');$('#si').value='';$('#si').focus()};$('#sx').onclick=()=>show($('#search'),false);$('#si').oninput=e=>rs(e.target.value);
// checkout
$('#gco').onclick=()=>{if(!cart.length){toast('Your cart is empty');return}show($('#cart'),false);$('#osl').innerHTML=cart.map(i=>`<div class="tot mut"><span>${byId(i.id).name} ×${i.q} (${i.c==='classic'?'':i.c+', '}${i.s})</span><span>${money(byId(i.id).price*i.q)}</span></div>`).join('');const s=sub(),sh=s>=50?0:5;$('#o1').textContent=money(s);$('#o2').textContent=sh?money(sh):'Free';$('#o3').textContent=money(s+sh);show($('#co'),true)};
$('#cox').onclick=()=>show($('#co'),false);
$('#po').onclick=()=>{const bad=$$('#co input[required]').find(i=>!i.checkValidity());if(bad){bad.reportValidity();return}$('#ok').style.display='flex';cart=[];renderCart()};
$('#okx').onclick=()=>{$('#ok').style.display='none';show($('#co'),false)};
$('#sb').onclick=()=>{const e=$('#em');if(!e.checkValidity()||!e.value){toast('Enter a valid email');e.focus();return}toast('Thanks! Demo only.');e.value=''};
