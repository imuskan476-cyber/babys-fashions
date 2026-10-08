// Small helpers used everywhere: selectors, money format, product images, toast message.
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const money=n=>'$'+n.toFixed(2),byId=id=>PRODUCTS.concat(POPULAR).find(p=>p.id===id),sizes=p=>p.sizes||(p.cat.includes('baby')?[18,19,20,21,22,23]:[26,27,28,29,30,31,32]);
const im=(c,a)=>`<img src="${PHOTO}" alt="${a||''}" style="filter:${COLORS[c].f}">`;
const pim=(p,c)=>p.img?`<img src="${p.img}" alt="${p.name}" class="ph">`:im(c||p.colors[0],p.name);
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),1800)}
