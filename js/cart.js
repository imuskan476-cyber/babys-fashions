// Shopping cart (saved in the browser with localStorage).
let cart=[];try{cart=JSON.parse(localStorage.getItem('bf-cart'))||[]}catch(e){}
const sub=()=>cart.reduce((a,i)=>a+byId(i.id).price*i.q,0);
function renderCart(){$('#cc').textContent=cart.reduce((a,i)=>a+i.q,0);
 $('#ci').innerHTML=cart.length?cart.map((i,n)=>{const p=byId(i.id);return `<div class="ln"><div class="pi">${pim(p,i.c)}</div><div><b>${p.name}</b><div class="mut">${i.c==='classic'?'':i.c+' / '}EU ${i.s}</div><div class="q"><button data-q="${n}" data-d="-1" aria-label="Less">−</button>${i.q}<button data-q="${n}" data-d="1" aria-label="More">+</button><button data-rm="${n}" class="mut" style="margin-left:6px;text-decoration:underline">Remove</button></div></div><b>${money(p.price*i.q)}</b></div>`}).join(''):'<p class="mut">Your cart is empty. Pick a pair you like.</p>';
 $('#cs').textContent=$('#ct').textContent=money(sub());try{localStorage.setItem('bf-cart',JSON.stringify(cart))}catch(e){}}
$('#ci').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.rm)cart.splice(+b.dataset.rm,1);else if(b.dataset.q){const i=cart[+b.dataset.q];i.q+=+b.dataset.d;if(i.q<1)cart.splice(+b.dataset.q,1)}renderCart()};
