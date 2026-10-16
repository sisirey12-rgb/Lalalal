const cart = {};
let lenis = null;   // Lenis instance (desktop pointers only). null = plain native scrolling.
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const slug = s => s.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
const pending = v => !v || /PLACEHOLDER/.test(v);
const byId = id => MENU.find(x => x.id === id);
const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
const lines = () => Object.entries(cart).map(([id, q]) => ({d: byId(id), q}));
function total(){
  const ls = lines();
  if (!ls.length) return "—";
  if (ls.some(l => l.d.price == null)) return "To be confirmed";
  return CONFIG.currency + ls.reduce((a, l) => a + l.d.price * l.q, 0).toFixed(2);
}

/* ---------- controls ---------- */
const stepperHtml = (id, q) =>
  `<div class="stepper"><button type="button" data-id="${id}" data-d="-1" aria-label="Remove one">−</button><span aria-live="polite">${q}</span><button type="button" data-id="${id}" data-d="1" aria-label="Add one">+</button></div>`;
function ctrlHtml(d){
  if (d.view) return "";
  if (d.available === false) return `<span class="soldout">Unavailable</span>`;
  const q = cart[d.id] || 0;
  return q ? stepperHtml(d.id, q)
           : `<button class="add" type="button" data-id="${d.id}" data-d="1" aria-label="Add ${esc(d.name)} to order">+</button>`;
}
function updateCtrl(id){
  const d = byId(id);
  const active = document.activeElement;
  const focusHost = active && active.closest ? active.closest("[data-ctrl]") : null;
  $$(`[data-ctrl="${id}"]`).forEach(host => {
    host.innerHTML = ctrlHtml(d);
    const holder = host.closest(".row, .tile");
    if (holder) holder.classList.toggle("in", !!cart[id]);
  });
  if (focusHost && focusHost.dataset.ctrl === id) {
    const b = focusHost.querySelector('button[data-d="1"]');
    if (b) b.focus();
  }
}

/* ---------- signature dishes ---------- */
function renderSpecials(){
  $("#spList").innerHTML = MENU.filter(d => d.cat === "Specials").map(d => `
    <article class="tile${cart[d.id] ? " in" : ""}">
      ${d.img ? `<div class="tile-media"><img class="bg" src="${IMG[d.img]}" alt="" aria-hidden="true" loading="lazy"><img class="fg" src="${IMG[d.img]}" alt="${esc(d.name)}" decoding="async" loading="lazy"></div>` : ""}
      <div class="cap">
        <h3>${esc(d.name)}</h3>
        ${d.desc ? `<p class="tdesc">${esc(d.desc)}</p>` : ""}
        <div class="cr"><span class="pr">${esc(d.label)}</span><div class="ctrl" data-ctrl="${d.id}">${ctrlHtml(d)}</div></div>
      </div>
    </article>`).join("");
}

/* ---------- menu rows ---------- */
function row(d){
  const noPhoto = !d.img && !d.view;
  const cls = ["row", d.view ? "view" : "", noPhoto ? "nophoto" : "", cart[d.id] ? "in" : ""].filter(Boolean).join(" ");
  const thumb = d.img && !d.view ? `<div class="thumb"><img src="${IMG[d.img]}" alt="" decoding="async" loading="lazy"></div>` : "";
  const ctrl = d.view ? "" : `<div class="ctrl" data-ctrl="${d.id}">${ctrlHtml(d)}</div>`;
  return `<div class="${cls}">${thumb}<div class="info"><div class="nl${d.label.length > 8 ? " long" : ""}"><span class="nm">${esc(d.name)}</span><span class="lead-dots" aria-hidden="true"></span><span class="pr">${esc(d.label)}</span></div>${d.desc ? `<p class="ds">${esc(d.desc)}</p>` : ""}</div>${ctrl}</div>`;
}
function renderHomeMenu(){
  $("#homeList").innerHTML = MENU.filter(d => d.cat === "Specials").map(row).join("");
}
function renderMenu(){
  let html = "";
  for (const cat of MENU_CATS) {
    const items = MENU.filter(d => d.cat === cat);
    html += `<div class="menu-cat" id="cat-${slug(cat)}"><h2 class="cat-title">${esc(cat)}</h2>`;
    if (cat === "Bar") html += `<p class="note">Served in the restaurant. Not available to order online.</p>`;
    let last = null;
    for (const d of items) {
      if (d.sub !== last) { html += `<h3 class="cat-sub">${esc(d.sub)}</h3>`; last = d.sub; }
      html += row(d);
    }
    html += `</div>`;
  }
  $("#menuBody").innerHTML = html;
  $("#msCats").innerHTML = MENU_CATS.map(c => `<a href="#cat-${slug(c)}" data-target="cat-${slug(c)}">${esc(c)}</a>`).join("");
}
function setupSpy(){
  const links = new Map($$("#msCats a").map(a => [a.dataset.target, a]));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(a => a.classList.remove("on"));
      const a = links.get(en.target.id);
      if (a) { a.classList.add("on"); a.scrollIntoView({inline: "center", block: "nearest"}); }
    });
  }, {root: $("#menuSheet .ms-body"), rootMargin: "-8% 0px -85% 0px"});
  $$("#menuBody .menu-cat").forEach(el => io.observe(el));
}

/* ---------- dialogs ---------- */
let lastFocus = null;
const lock = () => { document.body.style.overflow = ($("#menuSheet").classList.contains("open") || $("#cartDrawer").classList.contains("open")) ? "hidden" : ""; syncScrollLock(); };
/* Pause Lenis while the loader, the menu or the order drawer is showing; they scroll natively. */
function syncScrollLock(){
  if (!lenis) return;
  const locked = document.body.classList.contains("loading") || $("#menuSheet").classList.contains("open") || $("#cartDrawer").classList.contains("open");
  if (locked) lenis.stop(); else lenis.start();
}
function openMenu(){ lastFocus = document.activeElement; $("#menuSheet").classList.add("open"); $("#menuSheet .ms-body").scrollTop = 0; lock(); $("#closeMenu").focus(); }
function closeMenu(){ $("#menuSheet").classList.remove("open"); lock(); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
function openCart(){ lastFocus = document.activeElement; renderCart(); $("#cartDrawer").classList.add("open"); lock(); $("#closeCart").focus(); }
function closeCart(){ $("#cartDrawer").classList.remove("open"); lock(); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
$("#closeMenu").onclick = closeMenu;
$("#closeCart").onclick = closeCart;
$("#cartDrawer").addEventListener("click", e => { if (e.target.id === "cartDrawer") closeCart(); });
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if ($("#cartDrawer").classList.contains("open")) closeCart();
  else if ($("#menuSheet").classList.contains("open")) closeMenu();
});
$("#msCats").addEventListener("click", e => {
  const a = e.target.closest("a[data-target]");
  if (!a) return;
  e.preventDefault();
  document.getElementById(a.dataset.target).scrollIntoView({behavior: "smooth", block: "start"});
});

/* ---------- cart ---------- */
function renderCart(){
  const ls = lines();
  $("#cartLines").innerHTML = ls.length ? ls.map(({d, q}) =>
    `<div class="cart-line"><div><strong>${esc(d.name)}</strong><small>${esc(d.label)} each</small></div>${stepperHtml(d.id, q)}</div>`).join("")
    : `<p class="empty">Your order is empty. Add a few dishes from the menu.</p>`;
  $("#cartTotal").textContent = total();
  $("#cartCount").textContent = count() ? ` (${count()})` : "";
  $("#clearCart").hidden = !ls.length;
}
function onCartChange(id){
  if (id) updateCtrl(id);
  const n = count();
  ["#badgeTop", "#badgeBottom"].forEach(s => { $(s).textContent = n; $(s).classList.toggle("on", n > 0); });
  $("#msBar").hidden = n === 0;
  $("#msBarCount").textContent = n + (n === 1 ? " item" : " items");
  renderCart();
}
document.addEventListener("click", e => {
  const step = e.target.closest("button[data-d]");
  if (step) {
    const d = byId(step.dataset.id);
    if (!d || d.view || d.available === false) return;
    cart[d.id] = Math.max(0, (cart[d.id] || 0) + Number(step.dataset.d));
    if (!cart[d.id]) delete cart[d.id];
    onCartChange(d.id);
    return;
  }
  if (e.target.closest("[data-open-cart]")) { e.preventDefault(); openCart(); return; }
  if (e.target.closest("[data-open-menu]")) { e.preventDefault(); openMenu(); return; }
  if (e.target.closest("[data-clear]")) {
    Object.keys(cart).forEach(id => { delete cart[id]; updateCtrl(id); });
    onCartChange();
  }
});

/* ---------- WhatsApp ordering and reservations ---------- */
const waReady = () => /^\d{8,15}$/.test(CONFIG.whatsappNumber);
const waUrl = text => `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
function show(el, html, kind){ el.className = "msg " + kind; el.innerHTML = html; el.hidden = false; }
function sendWhatsApp(text, el, doneText){
  if (!waReady()) { show(el, "WhatsApp is not set up yet. Please call us instead.", "err"); return; }
  const url = waUrl(text);
  window.open(url, "_blank");
  show(el, `${doneText} If WhatsApp did not open, <a href="${esc(url)}" target="_blank" rel="noopener">tap here</a>.`, "ok");
}
const orderType = () => document.querySelector('input[name="otype"]:checked').value;
function syncOrderType(){
  const t = orderType();
  const map = {"Pickup": ["Pickup time", "e.g. 7:30 PM"], "Delivery": ["Delivery address", "House or flat, street, landmark"], "Dine-in": ["Time and number of guests", "e.g. 8 PM, 4 people"]};
  $("#oaLabel").textContent = map[t][0];
  $("#oa").placeholder = map[t][1];
  $("#oa").required = t === "Delivery";
}
$$('input[name="otype"]').forEach(r => r.addEventListener("change", syncOrderType));
function orderText(){
  const items = lines().map(({d, q}) => `- ${q} x ${d.name} (${d.label})`).join("\n");
  return `Hi ${CONFIG.restaurant}, I'd like to place an order:\n\n${items}\n\nTotal: ${total()}\n\nOrder type: ${orderType()}\nName: ${$("#on").value.trim()}\nPhone: ${$("#op").value.trim()}\n${$("#oaLabel").textContent}: ${$("#oa").value.trim() || "-"}\nNotes: ${$("#on2").value.trim() || "-"}`;
}
function checkOrder(){
  const msg = $("#orderMsg");
  if (!count()) { show(msg, "Your order is empty. Add at least one dish first.", "err"); return false; }
  if (!$("#orderForm").checkValidity()) { $("#orderForm").reportValidity(); show(msg, "Please fill in your name and phone number" + (orderType() === "Delivery" ? " and delivery address." : "."), "err"); return false; }
  return true;
}
$("#orderForm").addEventListener("submit", e => {
  e.preventDefault();
  if (!checkOrder()) return;
  sendWhatsApp(orderText(), $("#orderMsg"), "Your order is ready in WhatsApp. Please press Send so we receive it. We will reply to confirm.");
});
$("#emailOrder").onclick = () => {
  if (!checkOrder()) return;
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Order from website")}&body=${encodeURIComponent(orderText())}`;
};
$("#resForm").addEventListener("submit", e => {
  e.preventDefault();
  const form = $("#resForm"), msg = $("#resMsg");
  if (!form.checkValidity()) { form.reportValidity(); show(msg, "Please fill in the date, time, your name and a valid phone number.", "err"); return; }
  const text = `Hi ${CONFIG.restaurant}, I'd like to request a table.\nDate: ${$("#rd").value}\nTime: ${$("#rt").value}\nGuests: ${$("#rg").value}\nName: ${$("#rn").value.trim()}\nPhone: ${$("#rp").value.trim()}\nMessage: ${$("#rm").value.trim() || "-"}`;
  sendWhatsApp(text, msg, "Your request is ready in WhatsApp. Please press Send. Your table is only confirmed once we reply.");
});

/* ---------- fill the page ---------- */
$$("#strip img").forEach(img => {
  const setRatio = () => img.style.setProperty("--r", (img.naturalWidth / img.naturalHeight).toFixed(4));
  if (img.complete && img.naturalWidth) setRatio(); else img.addEventListener("load", setRatio);
});
$("#addr").innerHTML = [CONFIG.legalName, ...CONFIG.address].map(esc).join("<br>");
$("#phones").innerHTML = CONFIG.phones.map(esc).join("<br>");
$("#mapsLink").href = CONFIG.mapsUrl;
$("#waLink").href = `https://wa.me/${CONFIG.whatsappNumber}`;
$("#callLink").href = "tel:+" + CONFIG.whatsappNumber;
$("#emailLine").textContent = pending(CONFIG.email) ? "[Placeholder: email address]" : CONFIG.email;
if (pending(CONFIG.email)) $("#emailOrder").hidden = true;
const igHandle = (() => { try { return "@" + new URL(CONFIG.instagram).pathname.replace(/\//g, ""); } catch (e) { return "Instagram"; } })();
$("#igSlot").innerHTML = pending(CONFIG.instagram)
  ? `<span class="pending">Instagram link to be added</span>`
  : `<a class="link" href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener">Instagram ${esc(igHandle)}</a>`;
$("#platforms").innerHTML = [["Zomato", CONFIG.zomato], ["Swiggy", CONFIG.swiggy]].map(([name, url]) =>
  pending(url)
    ? `<span class="pending">${name}: verified link to be added</span>`
    : `<a class="btn btn-line" href="${esc(url)}" target="_blank" rel="noopener">Order on ${name}</a>`).join("");
$("#footContact").innerHTML =
  `<p>${CONFIG.phones.map(esc).join("<br>")}</p><p style="margin-top:10px">${CONFIG.address.map(esc).join("<br>")}</p>` +
  (pending(CONFIG.instagram) ? "" : `<p style="margin-top:10px"><a href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener">Instagram</a></p>`);
const dayRows = $$(".hours tr");
if (dayRows.length === 7) dayRows[(new Date().getDay() + 6) % 7].classList.add("today");
const t0 = new Date(), pad = n => String(n).padStart(2, "0");
$("#rd").min = `${t0.getFullYear()}-${pad(t0.getMonth() + 1)}-${pad(t0.getDate())}`;
syncOrderType();

renderSpecials();
renderHomeMenu();
renderMenu();
setupSpy();
onCartChange();

/* ---------- hero slideshow ---------- */
(function(){
  const slides = CONFIG.heroSlides.filter(s => IMG[s.img]);
  $("#heroTag").innerHTML = CONFIG.heroTagline.map(esc).join("<br>");
  const dots = $("#heroDots");
  $("#heroSlides").innerHTML = slides.map((s, i) =>
    `<img class="hero-img${i === 0 ? " on" : ""}" src="${IMG[s.img]}" alt="${esc(s.alt)}" style="object-position:${esc(s.pos || "50% 50%")}" decoding="async"${i === 0 ? ' fetchpriority="high"' : ""}>`).join("");
  if (slides.length < 2) { dots.hidden = true; return; }
  dots.innerHTML = slides.map((s, i) =>
    `<button type="button" class="${i === 0 ? "on" : ""}" data-slide="${i}" aria-label="Show photo ${i + 1} of ${slides.length}" aria-current="${i === 0}"></button>`).join("");
  const imgs = $$("#heroSlides .hero-img"), btns = $$("#heroDots button");
  let cur = 0, timer = null;
  const go = i => {
    cur = (i + slides.length) % slides.length;
    imgs.forEach((im, k) => im.classList.toggle("on", k === cur));
    btns.forEach((b, k) => { b.classList.toggle("on", k === cur); b.setAttribute("aria-current", String(k === cur)); });
  };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const start = () => { if (reduce || timer) return; timer = setInterval(() => { if (!document.hidden) go(cur + 1); }, 6500); };
  const stop = () => { clearInterval(timer); timer = null; };
  dots.addEventListener("click", e => { const b = e.target.closest("button[data-slide]"); if (!b) return; go(Number(b.dataset.slide)); stop(); start(); });
  const hero = $("#hero");
  hero.addEventListener("mouseenter", stop); hero.addEventListener("mouseleave", start);
  hero.addEventListener("focusin", stop); hero.addEventListener("focusout", start);
  start();
})();

/* ---------- highlight the current section in the header menu ---------- */
(function(){
  const links = $$(".top-nav a[data-nav]");
  const map = {hero: "home", about: "home", specials: "home", "home-menu": "menu", story: "gallery", gallery: "gallery", reserve: "reservation", visit: "contact"};
  const set = k => links.forEach(a => { const on = a.dataset.nav === k; a.classList.toggle("on", on); if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
  set("home");
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting && map[en.target.id]) set(map[en.target.id]); }), {rootMargin: "-45% 0px -50% 0px"});
  Object.keys(map).forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
})();

/* ---------- header on scroll + restrained hero drift (desktop pointers only) ---------- */
(function(){
  const top = $(".top"), hero = $("#hero"), slides = $("#heroSlides");
  const fxQuery = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 760px) and (prefers-reduced-motion: no-preference)");
  let heroH = hero.offsetHeight, lastP = -1;
  const onScroll = () => {
    const y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
    top.classList.toggle("scrolled", y > 24);
    top.style.setProperty("--sp", max > 0 ? (y / max).toFixed(4) : 0);
    const on = fxQuery.matches;
    hero.classList.toggle("fx", on);
    if (!on) { if (lastP !== -1) { slides.style.transform = ""; lastP = -1; } return; }
    const p = Math.min(1, Math.max(0, y / (heroH || 1)));
    if (Math.abs(p - lastP) > 0.001) { slides.style.transform = "translate3d(0," + (p * 44).toFixed(1) + "px,0)"; lastP = p; }
  };
  window.addEventListener("scroll", onScroll, {passive: true});
  window.addEventListener("resize", () => { heroH = hero.offsetHeight; onScroll(); }, {passive: true});
  onScroll();
})();

/* ---------- gentle reveal on scroll ---------- */
(function(){
  const sel = ["#about .about-grid > *", "#specials .wrap", "#spList", "#home-menu .wrap > *", ".story-grid > *", "#gallery .wrap > *",
               "#reserve .res-grid > *", "#visit .wrap > .eyebrow", "#visit .wrap > h2", "#visit .vb", ".foot-grid > *"];
  const els = [...new Set($$(sel.join(",")))];
  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries, obs) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in-view"); obs.unobserve(en.target); } });
  }, {threshold: 0.1, rootMargin: "0px 0px -5% 0px"}) : null;
  els.forEach(el => {
    el.classList.add("reveal");
    const sibs = el.parentElement ? [...el.parentElement.children] : [];
    el.style.transitionDelay = (Math.max(0, sibs.indexOf(el)) % 3) * 90 + "ms";
    if (io) io.observe(el); else el.classList.add("in-view");
  });
  $$("#strip img").forEach((img, i) => {
    img.classList.add("g-reveal");
    img.style.setProperty("--d", i * 110 + "ms");
    if (io) io.observe(img); else img.classList.add("in-view");
  });
})();

/* ---------- smooth scrolling (Lenis) ----------
   Only for mouse/trackpad devices that have not asked for reduced motion. Touch devices, reduced-motion users
   and any browser where the Lenis script did not load keep plain native scrolling (with CSS smooth anchors). */
(function(){
  const desktop = window.matchMedia("(hover: hover) and (pointer: fine)");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
  const OFFSET = -84;   // same as html { scroll-padding-top } so anchors land under the fixed header
  function enable(){
    if (lenis || typeof window.Lenis !== "function" || !desktop.matches || calm.matches) return;
    try { lenis = new window.Lenis({autoRaf: true, lerp: 0.1, smoothWheel: true, syncTouch: false}); }
    catch (err) { lenis = null; return; }
    syncScrollLock();
  }
  function disable(){ if (lenis) { lenis.destroy(); lenis = null; } }
  const refresh = () => (desktop.matches && !calm.matches) ? enable() : disable();
  // main.js runs before the (deferred) Lenis script, so start once every deferred script has run; retry on load.
  document.addEventListener("DOMContentLoaded", enable);
  window.addEventListener("load", enable);
  [desktop, calm].forEach(mq => (mq.addEventListener ? mq.addEventListener("change", refresh) : mq.addListener(refresh)));
  enable();

  // in-page links glide through Lenis; everything else (menu, cart, categories, skip link) is left alone
  document.addEventListener("click", e => {
    if (!lenis || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.classList.contains("skip") || a.hasAttribute("data-open-menu") || a.closest("#menuSheet")) return;
    const id = decodeURIComponent(a.getAttribute("href").slice(1));
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    e.preventDefault();
    const done = () => { if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1"); el.focus({preventScroll: true}); };
    if (id === "top") lenis.scrollTo(0, {onComplete: done}); else lenis.scrollTo(el, {offset: OFFSET, onComplete: done});
    try { history.pushState(null, "", "#" + id); } catch (err) {}
  });
})();

/* ---------- loading screen ---------- */
(function(){
  const loader = $("#loader"), fill = $("#ldFill");
  let p = 0, ready = false, finished = false;
  const MIN = 1500;                            // never flash: show the screen for at least this long
  const finish = () => {
    if (finished) return; finished = true;
    fill.style.transform = "scaleX(1)";
    setTimeout(() => {
      loader.classList.add("done");
      document.body.classList.remove("loading");
      syncScrollLock();
      document.documentElement.classList.add("ready");
      setTimeout(() => loader.remove(), 1700);
    }, 280);
  };
  const frame = () => {
    if (finished) return;
    p += ((ready ? 1 : 0.86) - p) * (ready ? 0.2 : 0.035);
    fill.style.transform = "scaleX(" + p.toFixed(4) + ")";
    if (ready && p > 0.985) { finish(); return; }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  const markLoaded = () => setTimeout(() => { ready = true; }, Math.max(0, MIN - performance.now()));
  if (document.readyState === "complete") markLoaded(); else window.addEventListener("load", markLoaded);
  setTimeout(finish, 5000);                    // safety net if something loads slowly
})();
