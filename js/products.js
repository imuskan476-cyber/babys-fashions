// ALL product data lives here. Edit names, prices, sizes and image paths in this file.
// Images are inside the assets/images folder.
const PHOTO='assets/images/kids-glow-shoe.webp';
const HERO='assets/images/hero-urban-black.webp';
const BAN='assets/images/banner-monster-trail.webp';
const COLORS={red:{hex:'#d6202e',f:'none'},blue:{hex:'#2a63d6',f:'hue-rotate(215deg)'},green:{hex:'#2fa35a',f:'hue-rotate(110deg)'},pink:{hex:'#f27a98',f:'hue-rotate(-22deg) saturate(.55) brightness(1.25)'},lilac:{hex:'#9b7be0',f:'hue-rotate(285deg) saturate(.6) brightness(1.2)'},black:{hex:'#1d1d20',f:'grayscale(1) brightness(.55) contrast(1.3)'}};
const PRODUCTS=[
{id:'glow',name:'Glow Runner',price:39,old:49,cat:['boys','girls'],isNew:1,colors:['red','blue','green','black']},
{id:'sprint',name:'Mini Sprint',price:35,old:45,cat:['boys'],colors:['blue','red','black']},
{id:'cloud',name:'Cloud Step',price:29,old:39,cat:['girls'],isNew:1,colors:['classic'],img:'assets/images/product-cloud.jpg'},
{id:'joy',name:'Rose Walker',price:42,old:52,cat:['girls'],colors:['classic'],sizes:[36,37,38,39,40,41],img:'assets/images/product-joy.jpg'},
{id:'star',name:'Star Jumper',price:33,old:43,cat:['boys','baby'],isNew:1,colors:['green','blue','red']},
{id:'play',name:'Play Sneaker',price:27,old:37,cat:['baby','girls'],colors:['black','pink','blue']},
{id:'urban',name:'Urban Black',price:54,old:68,cat:['girls','boys'],isNew:1,colors:['classic'],sizes:[36,37,38,39,40,41],img:HERO}];
const POPULAR=[
{id:'night',name:'Night Sport',price:59,old:75,cat:['boys'],isNew:1,colors:['classic'],sizes:[36,37,38,39,40,41],img:'assets/images/product-night.jpg'},
{id:'wave',name:'Red Wave',price:64,old:80,cat:['girls'],colors:['classic'],sizes:[36,37,38,39,40,41],img:'assets/images/product-wave.jpg'},
{id:'mid',name:'Midnight Low',price:72,old:90,cat:['boys'],isNew:1,colors:['classic'],sizes:[36,37,38,39,40,41],img:'assets/images/product-mid.jpg'},
{id:'monster',name:'Monster Trail',price:69,old:85,cat:['boys'],colors:['classic'],sizes:[36,37,38,39,40,41],img:'assets/images/product-monster.jpg'}];
POPULAR.push(PRODUCTS.find(p=>p.id==='cloud'),PRODUCTS.find(p=>p.id==='joy'));
