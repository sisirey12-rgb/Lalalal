
:root{
  --ink:#111111;--panel:#1B1B1B;--red:#A51F2B;--red-d:#86181f;--gold:#C7A66A;--ivory:#F5F0E7;--muted:#B5AEA2;
  --line:rgba(245,240,231,.12);--line-gold:rgba(199,166,106,.42);
  --serif:'Cormorant Garamond',Georgia,serif;--sans:'Hanken Grotesk',system-ui,-apple-system,sans-serif;
  --max:1160px;--gut:20px;--sec:76px;--header:68px;--bar:68px;
  --ease:cubic-bezier(.2,.7,.2,1);
  --lattice:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M22 0L44 22L22 44L0 22Z' fill='none' stroke='%23C7A66A' stroke-opacity='.075' stroke-width='1'/%3E%3C/svg%3E");
  --rail-pad:max(var(--gut),calc((100vw - var(--max)) / 2 + var(--gut)));
}
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:84px;-webkit-text-size-adjust:100%;overflow-x:hidden}
body{margin:0;background:var(--ink);color:var(--ivory);font:400 16px/1.65 var(--sans);overflow-x:clip;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;color-scheme:dark}
img{display:block;max-width:100%}
h1,h2,h3,h4,p{margin:0}
button,input,select,textarea{font:inherit;color:inherit}
button{cursor:pointer}
a{color:inherit}
:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.skip{position:absolute;left:12px;top:-70px;z-index:100;background:var(--gold);color:var(--ink);padding:10px 16px;font-weight:600;text-decoration:none}
.skip:focus{top:12px}
[hidden]{display:none!important}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.wrap{max-width:var(--max);margin-inline:auto;padding-inline:var(--gut)}
section{padding-block:var(--sec)}

/* type */
h1,h2,h3,h4{font-family:var(--serif);font-weight:600;letter-spacing:-.005em}
h2{font-size:clamp(38px,8vw,60px);line-height:1.04}
h3{font-size:24px;line-height:1.15}
.eyebrow{display:flex;align-items:center;gap:12px;font:600 11px/1 var(--sans);letter-spacing:.28em;text-transform:uppercase;color:var(--gold);margin-bottom:18px}
.eyebrow::before{content:"";width:28px;height:1px;background:var(--gold)}
.eyebrow b{font-weight:600;color:var(--ivory);opacity:.55}
.eyebrow b::after{content:"/";margin-left:12px;color:var(--gold);opacity:.7}
.text{color:var(--muted);font-size:17px;line-height:1.72;max-width:60ch;margin-top:20px}
.note{color:var(--muted);font-size:14px;line-height:1.6;max-width:62ch;margin-top:14px}
.sub-h{font:600 11px/1 var(--sans);letter-spacing:.24em;text-transform:uppercase;color:var(--gold);margin:30px 0 12px}

/* buttons and links */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 28px;border:1px solid transparent;border-radius:2px;font:600 12.5px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;text-decoration:none;background:none;transition:background-color .25s var(--ease),border-color .25s var(--ease),color .25s var(--ease),transform .2s var(--ease)}
.btn:active{transform:translateY(1px)}
.btn-red{background:var(--red);color:var(--ivory);box-shadow:inset 0 0 0 1px rgba(245,240,231,.08)}
.btn-red:hover{background:var(--red-d);box-shadow:inset 0 0 0 1px var(--gold)}
.btn-line{border-color:rgba(245,240,231,.4);color:var(--ivory)}
.btn-line:hover{border-color:var(--gold);color:var(--gold)}
.link{display:inline-block;color:var(--gold);font:600 12.5px/1.2 var(--sans);letter-spacing:.12em;text-transform:uppercase;text-decoration:none;border-bottom:1px solid var(--line-gold);padding-bottom:3px}
.link:hover{border-color:var(--gold)}
.orn{display:flex;align-items:center;justify-content:center;gap:14px;max-width:260px;margin:0 auto}
.orn::before,.orn::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--line-gold))}
.orn::after{background:linear-gradient(270deg,transparent,var(--line-gold))}
.orn i{width:9px;height:9px;border:1px solid var(--gold);transform:rotate(45deg);flex:none}

/* header */
.top{position:sticky;top:0;z-index:30;margin-bottom:calc(-1 * (var(--header) + env(safe-area-inset-top,0px) + 1px));padding-top:env(safe-area-inset-top,0px);background:rgba(17,17,17,0);border-bottom:1px solid transparent;transition:background-color .35s var(--ease),border-color .35s var(--ease)}
.top::before{content:"";position:absolute;left:0;right:0;top:0;bottom:-28px;background:linear-gradient(180deg,rgba(17,17,17,.78),rgba(17,17,17,0));pointer-events:none;transition:opacity .35s var(--ease)}
.top>*{position:relative}
.top.scrolled{background:rgba(17,17,17,.9);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border-bottom-color:var(--line)}
.top.scrolled::before{opacity:0}
.top::after{content:"";position:absolute;left:0;bottom:-1px;height:1px;width:calc(var(--sp,0) * 100%);background:var(--gold);opacity:0;transition:opacity .3s}
.top.scrolled::after{opacity:1}
.top-in{max-width:var(--max);margin:0 auto;height:var(--header);padding:0 var(--gut);display:flex;align-items:center;justify-content:space-between;gap:16px}
.logo{height:44px;width:auto}
.brand-logo{display:block;height:48px;width:auto;max-width:min(245px,52vw);object-fit:contain;object-position:left center}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none}
.seal{display:grid;place-items:center;width:40px;height:40px;background:var(--red);color:var(--ivory);font:600 22px/1 'Noto Serif SC',var(--serif);border-radius:2px;box-shadow:inset 0 0 0 1px rgba(245,240,231,.14)}
.wordmark{font:500 22px/1 var(--serif);letter-spacing:.3em;color:var(--ivory)}
.top-nav{display:none;gap:22px}
.top-nav a{position:relative;padding:8px 0;font:500 12px/1 var(--sans);letter-spacing:.18em;text-transform:uppercase;text-decoration:none;color:var(--ivory);opacity:.88;transition:color .2s,opacity .2s}
.top-nav a:hover,.top-nav a.on{color:var(--gold);opacity:1}
.top-nav a.on::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--gold)}
.hdr-actions{display:flex;align-items:center;gap:14px}
.cart-ico{position:relative;display:grid;place-items:center;width:44px;height:44px;background:none;border:0;color:var(--ivory);transition:color .2s}
.cart-ico:hover{color:var(--gold)}
.cart-ico svg{width:26px;height:26px}
.cart-ico .badge{display:block;top:3px;right:0}
.hdr-order{display:none;min-height:46px;padding:0 26px;font-size:12px;border-color:rgba(236,110,120,.55)}
.badge{position:absolute;top:-8px;right:-8px;min-width:20px;height:20px;padding:0 5px;border-radius:10px;background:var(--red);color:var(--ivory);font:700 11px/20px var(--sans);text-align:center;display:none}
.badge.on{display:block}

/* hero */
.hero{position:relative;isolation:isolate;display:flex;align-items:flex-end;padding:0;overflow:hidden;
  min-height:calc(100vh - var(--bar));
  min-height:calc(100svh - var(--bar) - env(safe-area-inset-bottom,0px))}
.hero-slides{position:absolute;inset:0;z-index:-2}
.hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.08);transition:opacity 1.3s ease,transform 8s linear}
.hero-img.on{opacity:1}
.js.ready .hero-img.on{transform:scale(1)}
.hero::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(17,17,17,.62) 0%,rgba(17,17,17,.5) 20%,rgba(17,17,17,.8) 42%,rgba(17,17,17,.92) 68%,#111 100%)}
.hero-in{width:100%;max-width:var(--max);margin:0 auto;padding:calc(var(--header) + env(safe-area-inset-top,0px) + 48px) var(--gut) 36px}
.hero-eyebrow,.h1-sub,.hero-tag{text-shadow:0 1px 16px rgba(0,0,0,.65)}
.hero-eyebrow{display:flex;flex-wrap:wrap;align-items:center;gap:6px 14px;font:500 11px/1.5 var(--sans);letter-spacing:.26em;text-transform:uppercase;color:var(--gold)}
.hero-eyebrow i{width:3px;height:3px;border-radius:50%;background:var(--gold);flex:none}
.hero h1{margin-top:22px}
.h1-main{display:block;margin-left:-.02em;font:600 clamp(66px,19.5vw,172px)/.95 var(--serif);letter-spacing:.14em;color:var(--gold);background:linear-gradient(180deg,#ECD39B 0%,#C7A66A 52%,#A98847 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 2px 14px rgba(0,0,0,.55))}
.h1-sub{display:block;margin-top:14px;font:500 clamp(14px,3.7vw,27px)/1.35 var(--serif);letter-spacing:.2em;text-transform:uppercase;color:var(--ivory)}
.hero-rule{display:flex;align-items:center;max-width:min(470px,88%);margin-top:22px;color:var(--gold)}
.hero-rule::before,.hero-rule::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,rgba(199,166,106,.9),rgba(199,166,106,.35))}
.hero-rule svg{width:26px;height:26px;margin:0 10px;flex:none}
.hero-tag{margin-top:24px;max-width:28ch;font:500 clamp(20px,5vw,27px)/1.45 var(--serif);color:var(--ivory)}
.hero-cta{display:flex;flex-direction:column;gap:12px;margin-top:30px}
.hero-cta .btn{width:100%;gap:16px}
.hero-cta .btn svg{width:18px;height:18px;flex:none}
.btn-ghost{border-color:rgba(199,166,106,.75);color:var(--ivory)}
.btn-ghost:hover{border-color:var(--gold);color:var(--gold)}
.hero-dots{display:flex;gap:6px;margin-top:34px}
.hero-dots button{position:relative;width:34px;height:22px;padding:0;border:0;background:none}
.hero-dots button::before{content:"";position:absolute;left:0;right:0;top:50%;height:3px;margin-top:-1.5px;background:rgba(245,240,231,.26);transition:background-color .3s}
.hero-dots button.on::before{background:var(--gold)}
.cloud{display:none;position:absolute;left:0;bottom:80px;width:170px;opacity:.55;pointer-events:none}

.js .hero-in>*{opacity:0;transform:translateY(26px)}
.js.ready .hero-in>*{animation:rise 1s var(--ease) forwards}
.js.ready .hero-in>*:nth-child(1){animation-delay:.05s}
.js.ready .hero-in>*:nth-child(2){animation-delay:.18s}
.js.ready .hero-in>*:nth-child(3){animation-delay:.32s}
.js.ready .hero-in>*:nth-child(4){animation-delay:.45s}
.js.ready .hero-in>*:nth-child(5){animation-delay:.58s}
.js.ready .hero-in>*:nth-child(6){animation-delay:.7s}
@keyframes rise{to{opacity:1;transform:none}}
.js .reveal{opacity:0;transform:translateY(26px);transition:opacity .9s var(--ease),transform .9s var(--ease)}
.js .reveal.in-view{opacity:1;transform:none}

/* welcome */
.about-grid{display:grid;gap:48px}
.taste{list-style:none;margin:0;padding:0}
.taste li{padding:24px 0;border-top:1px solid var(--line-gold)}
.taste li:last-child{border-bottom:1px solid var(--line-gold)}
.taste q{display:block;quotes:none;font:italic 500 clamp(28px,6vw,40px)/1.12 var(--serif)}
.taste span{display:block;margin-top:12px;font:600 11px/1 var(--sans);letter-spacing:.24em;text-transform:uppercase;color:var(--gold)}
.cta-row{display:flex;flex-direction:column;gap:12px;margin-top:32px}

/* signature dishes */
.rail{display:flex;gap:16px;margin-top:36px;padding:4px var(--rail-pad) 16px;scroll-padding-inline:var(--rail-pad);overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.rail::-webkit-scrollbar{display:none}
.tile{flex:0 0 min(76vw,300px);scroll-snap-align:start;display:flex;flex-direction:column;overflow:hidden;background:var(--panel);border:1px solid var(--line);border-radius:3px;transition:border-color .25s}
.tile:hover,.tile.in{border-color:var(--line-gold)}
.tile-media{position:relative;aspect-ratio:4/5;background:#141414;overflow:hidden}
.tile-media img{position:absolute;inset:0;width:100%;height:100%}
.tile-media .fg{object-fit:contain;transition:transform .9s var(--ease)}
@media (hover:hover){.tile:hover .tile-media .fg{transform:scale(1.04)}}
.tile-media .bg{object-fit:cover;filter:blur(22px) brightness(.55);transform:scale(1.25)}
.cap{display:flex;flex-direction:column;flex:1;gap:6px;padding:18px 18px 20px}
.cap h3{font-size:25px}
.tdesc{color:var(--muted);font-size:14px;line-height:1.5}
.cr{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:auto;padding-top:14px;border-top:1px solid var(--line)}
.cap .pr{font-size:17px}

/* shared controls */
.pr{font:600 15px/1.2 var(--sans);color:var(--gold);white-space:nowrap}
.add{width:42px;height:42px;display:grid;place-items:center;flex:none;border:0;border-radius:50%;background:var(--red);color:var(--ivory);font-size:22px;line-height:1;transition:background-color .2s}
.add:hover{background:var(--red-d)}
.stepper{display:flex;align-items:center;gap:6px}
.stepper button{width:36px;height:36px;border-radius:50%;border:1px solid var(--gold);background:none;color:var(--gold);font-size:18px;line-height:1;transition:background-color .2s,color .2s}
.stepper button:hover{background:var(--gold);color:var(--ink)}
.stepper span{min-width:22px;text-align:center;font-weight:600}
.soldout{font:600 11px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}

/* menu rows (home list and full menu) */
.menu-list{max-width:880px;margin-top:34px;border-top:1px solid var(--line-gold)}
.row{display:grid;grid-template-columns:64px 1fr auto;gap:16px;align-items:center;padding:16px 0;border-bottom:1px solid var(--line)}
.row.nophoto{grid-template-columns:1fr auto;padding:14px 0}
.row.view{grid-template-columns:1fr;padding:11px 0}
.thumb{width:64px;height:64px;overflow:hidden;border-radius:3px;background:var(--panel)}
.thumb img{width:100%;height:100%;object-fit:cover}
.info{min-width:0}
.nl{display:flex;align-items:baseline;gap:10px}
.nl.long{flex-wrap:wrap;gap:2px 10px}
.nm{font:500 17px/1.3 var(--sans);color:var(--ivory)}
.row.in .nm{color:var(--gold)}
.lead-dots{flex:1 1 14px;min-width:14px;border-bottom:1px dotted rgba(245,240,231,.28);transform:translateY(-4px)}
.ds{margin-top:4px;color:var(--muted);font-size:13px;line-height:1.45}
.row.nophoto .add{width:38px;height:38px;font-size:20px}
.row.nophoto .stepper button{width:32px;height:32px}
.more{margin-top:40px;text-align:center}

/* family dining */
.band{background-color:var(--panel);background-image:var(--lattice)}
.story-grid{display:grid;gap:52px;align-items:center}
.frame{position:relative}
.frame::after{content:"";position:absolute;inset:0;transform:translate(12px,12px);border:1px solid var(--line-gold);border-radius:2px;z-index:0}
.frame img{position:relative;z-index:1;width:100%;height:auto;aspect-ratio:4/5;object-fit:cover;border-radius:2px}
.words{margin-top:32px}
.words div{padding:14px 0;border-top:1px solid var(--line);font:italic 500 28px/1.2 var(--serif)}
.words div:last-child{border-bottom:1px solid var(--line)}

/* gallery */
.strip{display:flex;align-items:flex-start;gap:12px;margin:32px calc(var(--gut) * -1) 0;padding:0 var(--gut) 8px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.strip::-webkit-scrollbar{display:none}
.strip img{flex:0 0 auto;height:380px;width:auto;max-width:none;border-radius:3px;scroll-snap-align:center}
.swipe{margin-top:14px;color:var(--muted);font:600 11px/1 var(--sans);letter-spacing:.2em;text-transform:uppercase}

/* forms */
.res-grid{display:grid;gap:40px}
.res-grid>*,.story-grid>*,.about-grid>*,.visit-grid>*,.two>*{min-width:0}
.panel{background:var(--ink);border:1px solid var(--line);border-radius:3px;padding:24px 20px}
.form{display:grid;gap:16px}
.field{display:grid;gap:8px}
.field label,.field .lbl{font:600 11px/1 var(--sans);letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.field input,.field select,.field textarea{width:100%;min-height:52px;padding:13px 14px;background:#161616;border:1px solid var(--line);border-radius:2px;transition:border-color .2s,box-shadow .2s}
.field textarea{min-height:92px;resize:vertical}
.field select{appearance:none;-webkit-appearance:none;padding-right:42px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23C7A66A' stroke-width='1.5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 15px center}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px rgba(199,166,106,.18)}
.field input:user-invalid{border-color:#d25b66}
.two{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.field>*{min-width:0}
.field input,.field select,.field textarea{max-width:100%}
@media (max-width:519px){.two.dt{grid-template-columns:1fr}}
.radios{display:flex;gap:8px}
.radios label{flex:1;padding:13px 6px;border:1px solid var(--line);border-radius:2px;text-align:center;cursor:pointer;font:600 11.5px/1.2 var(--sans);letter-spacing:.1em;text-transform:uppercase;color:var(--ivory);transition:border-color .2s,color .2s}
.radios input{position:absolute;opacity:0;pointer-events:none}
.radios label:has(input:checked){border-color:var(--gold);color:var(--gold)}
.radios label:has(input:focus-visible){outline:2px solid var(--gold);outline-offset:2px}
.msg{margin-top:2px;padding:14px 16px;border:1px solid var(--line);border-radius:2px;font-size:14px;line-height:1.55}
.msg.ok{border-color:var(--line-gold);background:rgba(199,166,106,.08)}
.msg.err{border-color:rgba(210,91,102,.6);background:rgba(165,31,43,.14)}
.msg a{color:var(--gold)}

/* visit */
.visit-grid{display:grid;gap:40px;margin-top:36px}
.vb{border-top:1px solid var(--line-gold);padding-top:22px}
.vb h3{font-size:27px;margin-bottom:12px}
.vb p{color:var(--muted);font-size:15px;line-height:1.7}
.vb .link{margin-top:0}
#mapsLink{margin-top:16px}
.links{display:grid;justify-items:start;gap:16px;margin-top:16px}
.platforms{display:grid;gap:10px}
.pending{display:block;padding:14px 16px;border:1px dashed var(--line-gold);border-radius:2px;color:var(--muted);font-size:14px}
.hours{width:100%;border-collapse:collapse;font-size:14px}
.hours th,.hours td{padding:9px 0;border-bottom:1px solid var(--line);vertical-align:top;font-weight:400}
.hours th{text-align:left;color:var(--muted)}
.hours td{text-align:right;color:var(--ivory);line-height:1.5}
.hours small{color:var(--muted);font-size:12px}
.hours tr.today th,.hours tr.today td{color:var(--gold)}
.hours tr.today th::after{content:"Today";margin-left:10px;padding:2px 7px;border:1px solid var(--line-gold);border-radius:2px;font:600 10px/1.4 var(--sans);letter-spacing:.12em;text-transform:uppercase}

/* footer */
.foot{background-image:var(--lattice);border-top:1px solid var(--line);padding:56px 0 calc(var(--bar) + 36px + env(safe-area-inset-bottom,0px))}
.foot-grid{display:grid;gap:36px;margin-top:44px}
.foot .logo{height:54px;margin-bottom:16px}
.foot-slogan{font:italic 500 24px/1.2 var(--serif);color:var(--gold)}
.foot p,.foot a{font-size:14px}
.foot-brand p{color:var(--muted);margin-top:8px}
.foot-col h4{font:600 11px/1 var(--sans);letter-spacing:.24em;text-transform:uppercase;color:var(--gold);margin-bottom:16px}
.foot-col{display:grid;gap:10px;align-content:start}
.foot-col a{color:var(--muted);text-decoration:none;transition:color .2s}
.foot-col a:hover{color:var(--gold)}
.foot-col p{color:var(--muted);line-height:1.7}
.foot-mark{margin-top:52px;text-align:center;font:600 clamp(72px,21vw,300px)/.8 var(--serif);letter-spacing:.04em;color:var(--red);user-select:none;overflow:hidden;white-space:nowrap}
.foot-bar{margin-top:44px;padding-top:22px;border-top:1px solid var(--line);color:var(--muted);font-size:13px}

/* mobile action bar */
.bar{position:fixed;left:0;right:0;bottom:0;z-index:40;display:grid;grid-template-columns:1fr 1fr 1.35fr;gap:8px;padding:10px 12px calc(10px + env(safe-area-inset-bottom,0px));background:rgba(17,17,17,.96);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-top:1px solid var(--line)}
.bar .btn{position:relative;min-height:48px;padding:0 6px;font-size:11.5px}
.bar .badge{top:-7px;right:-4px}

/* full menu panel */
.menu-sheet{position:fixed;inset:0;z-index:70;display:none;flex-direction:column;background:var(--ink);padding-top:env(safe-area-inset-top,0px)}
.menu-sheet.open{display:flex}
.ms-head{flex:none;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px var(--gut);border-bottom:1px solid var(--line)}
.ms-title{display:flex;align-items:center;gap:14px}
.ms-title .logo{height:38px}
.ms-title h2{font-size:30px}
.x{min-height:42px;padding:0 16px;background:none;border:1px solid var(--line);border-radius:2px;font:600 11.5px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;transition:border-color .2s,color .2s}
.x:hover{border-color:var(--gold);color:var(--gold)}
.ms-cats{flex:none;display:flex;gap:6px;padding:12px var(--gut);overflow-x:auto;white-space:nowrap;border-bottom:1px solid var(--line);scrollbar-width:none}
.ms-cats::-webkit-scrollbar{display:none}
.ms-cats a{flex:0 0 auto;padding:10px 15px;border:1px solid var(--line);border-radius:2px;text-decoration:none;font:600 11.5px/1 var(--sans);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);transition:border-color .2s,color .2s}
.ms-cats a:hover{color:var(--ivory)}
.ms-cats a.on{border-color:var(--gold);color:var(--gold)}
.ms-body{flex:1;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;padding-bottom:48px}
.ms-body .wrap{max-width:780px}
.menu-cat{padding-top:38px}
.cat-title{font-size:38px}
.cat-sub{font:600 11px/1 var(--sans);letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin:30px 0 4px}
.ms-bar{flex:none;padding:12px var(--gut) calc(12px + env(safe-area-inset-bottom,0px));background:var(--panel);border-top:1px solid var(--line-gold)}
.ms-bar .btn{width:100%;justify-content:space-between}

/* order drawer */
.drawer{position:fixed;inset:0;z-index:80;display:none;justify-content:center;align-items:flex-end;background:rgba(0,0,0,.72)}
.drawer.open{display:flex}
.sheet{width:100%;max-width:640px;max-height:94vh;max-height:94dvh;overflow:auto;overscroll-behavior:contain;padding:22px 20px calc(24px + env(safe-area-inset-bottom,0px));background:var(--panel);border-top:1px solid var(--line-gold);border-radius:12px 12px 0 0}
.sheet-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:8px}
.sheet-head h2{font-size:36px}
.cart-line{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--line)}
.cart-line strong{display:block;font-weight:500;font-size:16px}
.cart-line small{color:var(--muted);font-size:13px}
.total{display:flex;justify-content:space-between;align-items:baseline;padding:18px 0;font:600 12px/1 var(--sans);letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.total span:last-child{font:600 28px/1 var(--serif);letter-spacing:0;text-transform:none;color:var(--gold)}
.empty{color:var(--muted);padding:20px 0}
.clear{background:none;border:0;padding:0;color:var(--muted);font:500 13px var(--sans);text-decoration:underline;text-underline-offset:3px}
.clear:hover{color:var(--gold)}


/* loading screen */
.loader{position:fixed;inset:0;z-index:200;display:grid;place-items:center;overflow:hidden;animation:loaderFailsafe .01s 5.4s forwards}
.ld-panel{position:absolute;top:0;bottom:0;width:50.3%;background:var(--ink);transition:transform 1.05s cubic-bezier(.77,0,.18,1) .3s}
.ld-l{left:0}.ld-r{right:0}
.ld-l::after,.ld-r::after{content:"";position:absolute;top:0;bottom:0;width:1px;background:var(--line-gold)}
.ld-l::after{right:0}.ld-r::after{left:0}
.loader-in{position:relative;z-index:2;display:grid;justify-items:center;gap:22px;padding:24px;text-align:center;transition:opacity .4s var(--ease),transform .5s var(--ease)}
.loader-in::before{content:"";position:absolute;left:50%;top:50%;width:140vmax;height:140vmax;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(199,166,106,.09),transparent 42%);z-index:-1;pointer-events:none}
.loader-in img{width:min(60vw,240px);height:auto;animation:loaderIn 1s var(--ease) both}
.loader-in .orn{width:min(50vw,190px);animation:loaderIn 1s .15s var(--ease) both}
.loader-line{width:min(52vw,190px);height:1px;background:rgba(245,240,231,.16);overflow:hidden;animation:loaderIn 1s .25s var(--ease) both}
.loader-line i{display:block;height:100%;background:var(--gold);transform-origin:left center;transform:scaleX(0)}
.loader p{font:italic 500 20px/1.2 var(--serif);color:var(--gold);letter-spacing:.02em;animation:loaderIn 1s .35s var(--ease) both}
.loader.done{pointer-events:none;visibility:hidden;transition:visibility 0s linear 1.45s}
.loader.done .loader-in{opacity:0;transform:scale(.96)}
.loader.done .ld-l{transform:translateX(-101%)}
.loader.done .ld-r{transform:translateX(101%)}
body.loading{overflow:hidden}
@keyframes loaderIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes loaderFailsafe{to{opacity:0;visibility:hidden}}

@media (min-width:760px){
  :root{--sec:112px;--gut:32px}
  .bar,.ms-bar-mobile{display:none}
  .top-nav{display:flex}
  .hero{min-height:min(100vh,900px)}
  .hero::after{background:linear-gradient(90deg,rgba(17,17,17,.5) 0%,rgba(17,17,17,.12) 55%,rgba(17,17,17,0) 100%),linear-gradient(180deg,transparent 64%,#111 100%)}
  .hero-slides{left:auto;right:0;width:72%;-webkit-mask-image:linear-gradient(90deg,transparent 0%,rgba(0,0,0,.8) 28%,#000 52%);mask-image:linear-gradient(90deg,transparent 0%,rgba(0,0,0,.8) 28%,#000 52%)}
  .hero-in{padding-bottom:72px}
  .hero-cta{flex-direction:row;gap:16px}
  .hero-cta .btn{width:auto}
  .cta-row{flex-direction:row}
  .about-grid{grid-template-columns:1.1fr 1fr;gap:96px;align-items:start}
  .story-grid{grid-template-columns:1fr 1fr;gap:96px}
  .strip{margin-inline:0;padding-inline:0;overflow:visible;gap:16px}
  .strip img{height:auto;width:auto;min-width:0;flex:var(--r,1) 1 0%}
  .swipe{display:none}
  .res-grid{grid-template-columns:1fr 1.15fr;gap:88px;align-items:start}
  .panel{padding:36px}
  .visit-grid{grid-template-columns:repeat(3,1fr);gap:48px}
  .foot{padding-bottom:56px}
  .foot-grid{grid-template-columns:1.3fr 1fr 1.2fr;gap:64px}
  .row{grid-template-columns:80px 1fr auto;padding:20px 0}
  .row.nophoto{grid-template-columns:1fr auto;padding:15px 0}
  .row.view{grid-template-columns:1fr}
  .thumb{width:80px;height:80px}
  .drawer{align-items:center}
  .sheet{border-radius:6px;border:1px solid var(--line-gold)}
}
@media (min-width:1024px){
  .rail{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;overflow:visible;max-width:var(--max);margin-inline:auto;padding-inline:var(--gut)}
  .tile{flex:none}
}
@media (min-width:900px){.cloud{display:block}}
@media (min-width:980px){.hdr-order{display:inline-flex}.wordmark{font-size:28px}.seal{width:46px;height:46px;font-size:26px}}
@media (min-width:1100px){.top-nav{gap:40px}}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{transition:none!important;animation:none!important}.loader-line i{width:100%;transform:none!important}.js .hero-in>*,.js .reveal{opacity:1!important;transform:none!important}.js .hero-img{transform:none!important}}


/* ===== RATAN premium polish layer ===== */
:focus-visible { outline: 2px solid var(--gold); outline-offset: 4px; }
html { scroll-behavior: smooth; scroll-padding-top: calc(var(--header) + 16px); }
html.lenis, html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
body { text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; }
.btn, .top-nav a, .bottom-bar a, .bottom-bar button, .hero-dots button, .menu-card, .gallery-grid img {
  transition-timing-function: var(--ease, cubic-bezier(.2,.7,.2,1));
}
.btn { transform: translateZ(0); }
.btn:active { transform: translateY(1px) scale(.99); }
.btn-red { box-shadow: 0 8px 24px rgba(165,31,43,.14); }
@media (hover:hover) and (pointer:fine) {
  .btn-red:hover { box-shadow: 0 12px 30px rgba(165,31,43,.24); }
  .menu-card:hover { border-color: var(--line-gold); }
  .gallery-grid img { transition: transform .7s var(--ease), filter .7s var(--ease); }
  .gallery-grid a:hover img, .gallery-grid figure:hover img { transform: scale(1.025); }
}
.motion-reveal { opacity: 0; transform: translate3d(0, 18px, 0); transition: opacity .7s var(--ease), transform .7s var(--ease); transition-delay: var(--reveal-delay, 0ms); will-change: opacity, transform; }
.motion-reveal.is-visible { opacity: 1; transform: translate3d(0, 0, 0); will-change: auto; }
.hero { isolation: isolate; }
.hero::before { pointer-events: none; }
img { backface-visibility: hidden; }
@media (max-width: 600px) {
  .motion-reveal { transform: translate3d(0, 12px, 0); transition-duration: .55s; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto !important; }
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; }
  .motion-reveal { opacity: 1 !important; transform: none !important; }
}
