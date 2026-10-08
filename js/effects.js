// Camera effect on the home page shoe (focus pull, tilt, scroll zoom). Turns off for reduced-motion users.
// camera effect: hero focus-pull, pointer parallax, scroll push-in, studio light
if(!RM){const hr=$('.hr'),sh=$('#hi'),bg=$('.big');let tx=0,ty=0,x=0,y=0,s=0,on=true;hr.style.touchAction='pan-y';
 hr.addEventListener('pointermove',e=>{const r=hr.getBoundingClientRect();tx=(e.clientX-r.left)/r.width-.5;ty=(e.clientY-r.top)/r.height-.5;hr.style.setProperty('--mx',(tx+.5)*100+'%');hr.style.setProperty('--my',(ty+.5)*100+'%')});
 ['pointerleave','pointercancel'].forEach(n=>hr.addEventListener(n,()=>{tx=ty=0}));
 new IntersectionObserver(([e])=>on=e.isIntersecting).observe(hr);
 (function loop(t){requestAnimationFrame(loop);if(!on)return;const r=hr.getBoundingClientRect(),p=Math.min(Math.max(-r.top/r.height,0),1);
  x+=(tx-x)*.07;y+=(ty-y)*.07;s+=(p-s)*.1;
  sh.style.transform=`translate3d(${x*28}px,${y*18+Math.sin(t/1400)*6+s*40}px,0) rotateY(${x*14}deg) rotateX(${-y*10}deg) scale(${1+s*.18})`;
  bg.style.transform=`translate3d(${-x*22}px,${-s*30}px,0) rotate(180deg)`})(0);
 const mi=$('.mi'),mg=$('#mimg');mi.addEventListener('pointermove',e=>{const r=mi.getBoundingClientRect(),a=(e.clientX-r.left)/r.width-.5,b=(e.clientY-r.top)/r.height-.5;mg.style.transform=`perspective(700px) rotateY(${a*16}deg) rotateX(${-b*12}deg) scale(1.05)`});
 ['pointerleave','pointercancel'].forEach(n=>mi.addEventListener(n,()=>mg.style.transform=''))}
