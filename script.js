/* =========================================================
   EDITABLE CONTENT — change data here, interface code is below
   ========================================================= */
const sections = [ // right-side navigation
  ["metadata", "Metadata"], ["route", "Route"], ["skills", "Skills"],
  ["timeline", "Experience"], ["archive", "The Archive"], ["certs", "Certs"], ["contact", "Get in Touch"]
];

// Archive gallery — add a map by adding an object (put images in /images)
const projects = [
  { title: "Beneath the Canopy: BVDU Campus Tree Explorer", image: "images/tree-census.jpg", dataset: "Epicollect field records", year: "Add year",
    tools: ["Epicollect", "GIS"], description: "1,076 trees across 22 grid zones and 62 species; 92.4% healthy, 63 wildlife sightings.", link: "https://sites.google.com/view/preeti-ekawade/home" },
  { title: "Medical Facilities Around BVDU, Pune", image: "images/medical-facilities.jpg", dataset: "Add dataset", year: "Add year",
    tools: ["Web GIS"], description: "Interactive map of 40 medical facilities within 1 km of campus; 13 open 24/7.", link: "https://preeti-ekawade.github.io/Medical-Facilities-in-and-Arourd-BVDU/" },
  { title: "Campus Solar Power Overview", image: "images/solar-power.jpg", dataset: "Add dataset", year: "Add year",
    tools: ["GIS"], description: "54.55% of panels supply electricity, 18.18% both electricity and water heating (SDG 7, 13).", link: "https://sites.google.com/view/preeti-ekawade/home" },
  { title: "Mulshi Ecosystem Services, NDWI & NDVI", image: "images/mulshi-ndvi.jpg", dataset: "Field data + satellite imagery", year: "Add year",
    tools: ["Remote Sensing", "NDVI", "NDWI"], description: "Ecosystem services, open water and vegetation health from field data and imagery.", link: "https://sites.google.com/view/preeti-ekawade/field-exposure" },
  { title: "Comparative Vegetation Analysis: MODIS, Landsat 9 & Sentinel-2", image: "images/vegetation-analysis.jpg", dataset: "MODIS NDVI, Landsat 9 FCC, Sentinel-2 FCC", year: "Add year",
    tools: ["Google Earth Engine", "NDVI", "FCC", "Remote Sensing"], description: "Interactive web portal comparing vegetation across the Goa talukas of Mormugao, Tiswadi and Bardez using MODIS NDVI (250 m), Landsat 9 FCC (30 m) and Sentinel-2 FCC (10 m), with a side-by-side comparison of resolution, revisit time and best-use cases.", link: "https://preeti-ekawade.github.io/COMPARITIVE-VEGETATION-ANALYSIS/" },
  { title: "Terrain Aspect, Mandovi River Basin", image: "images/aspect.png", fit: "contain", dataset: "Add dataset", year: "Add year", tools: ["Terrain", "Spatial Analysis"], description: "Slope-aspect classification of the Mandovi River Basin, Goa, into flat and directional facing classes.", link: "#" },
  { title: "Contour Map, Mandovi River Basin", image: "images/contour.png", fit: "contain", dataset: "Add dataset", year: "Add year", tools: ["Terrain"], description: "Topographical contour representation of the Mandovi River Basin, Goa.", link: "#" },
  { title: "Stream Density, Mandovi River Basin", image: "images/stream-density.png", fit: "contain", dataset: "Add dataset", year: "Add year", tools: ["Hydrology"], description: "Spatial distribution of stream density from very low to high across the basin.", link: "#" },
  { title: "Stream Order, Mandovi River Basin", image: "images/stream-order.png", fit: "contain", dataset: "Add dataset", year: "Add year", tools: ["Hydrology"], description: "Strahler stream-order network of the Mandovi River Basin, Goa.", link: "#" },
  { title: "Closest Hospital Facility Analysis", image: "images/closest-facility.png", fit: "contain", dataset: "Add dataset", year: "Add year", tools: ["Network Analysis"], description: "Shortest driving route from an incident to the nearest hospital, accounting for barriers and restrictions.", link: "#" },
  { title: "Driving Time Service Area", image: "images/service-area.png", fit: "contain", dataset: "Add dataset", year: "Add year", tools: ["Network Analysis"], description: "Accessibility zones within 5, 10 and 15 minutes of facilities.", link: "#" }
];

const majorProjects = [ // rotating ring
  { title: "Care Around You: A Web GIS Project", image: "images/medical-facilities.jpg", tools: ["Web GIS", "Mapping"],
    description: "Interactive WebGIS map of medical facilities around BVDU campus; helps users easily find nearby healthcare services.",
    link: "https://preeti-ekawade.github.io/Medical-Facilities-in-and-Arourd-BVDU/" },
  { title: "Interactive Global Earthquake Explorer", image: "images/earthquake.jpg", tools: ["Python", "GeoPandas", "Plotly.js"],
    description: "3D earthquake map analysing magnitude, depth and hotspots to identify major seismic zones and spatial patterns.", link: "#" },
  { title: "Geospatial Assessment of Rural Villages", image: "images/rural.jpg", tools: ["3D model", "Field study"],
    description: "Study of Kondethar and Adharwadi villages, Maharashtra: rainfall vulnerability and flood risk with rooftop solar energy potential, for sustainable rural planning.", link: "#" }
];

const experience = [ // Experience archive. Drop real images at the paths below (see README note in chat).
  { org: "EarthSight Foundation", date: "May 2026 — Ongoing", position: "", tag: "Earth Observation", num: "Field Note 01",
    points: ["Analyzed historical LULC, LST, and NDVI changes using multi-temporal satellite data to track land transformation at Pashan-Baner hill.", "Produced spatial analysis maps for the official Forest Landscape Restoration Report."],
    cert: ["images/certs/earthsight.jpg"], photo: ["images/experience/earthsight.jpg", "images/vegetation-analysis.jpg"], photoCap: "Pashan-Baner hill",
    lay: { cert: [36, 3, 250, 3], note: [42, 38, 310, 2.5], photo: [2, 42, 270, -4], tag: [8, 12, 0, -3] }, bend: [26, -22, 24, -18] },
  { org: "India Space Lab", date: "May 2026 — June 2026", position: "", tag: "Rocketry / Autonomous Systems", num: "Field Note 02",
    points: ["Worked on PID Controller Tuning and Autonomous Navigation projects.", "Contributed to a project on Heat Wave Response, Recovery, Future Challenges, and Technology Support.", "Evaluated rocket fin structural and aerodynamic performance via SimScale."],
    cert: ["images/certs/india-space-lab.jpg"], photo: ["images/experience/india-space-lab.jpg"], photoCap: "Internship",
    lay: { cert: [4, 8, 250, -3], note: [30, 44, 310, -2], photo: [50, 4, 270, 4], tag: [70, 80, 0, 3] }, bend: [-24, 20, -22, 26] },
  { org: "Geo Vigyan", date: "Dec 2024 — Jan 2025", position: "Winter Internship", tag: "Spatial Analysis", num: "Field Note 03",
    points: ["Conducted ML-based environmental vulnerability analysis using remote sensing.", "Performed spatial analysis and mapping using Google Earth Engine."],
    cert: ["images/certs/geo-vigyan-2025.jpg"], photo: ["images/experience/geo-vigyan-2025.jpg", "images/vegetation-analysis.jpg"], photoCap: "Google Earth Engine",
    lay: { cert: [56, 6, 250, 4], note: [3, 6, 310, -2], photo: [30, 50, 270, -3], tag: [74, 68, 0, 3] }, bend: [22, -26, 24, -20] },
  { org: "Geo Vigyan", date: "Dec 2023 — Jan 2024", position: "Winter Internship", tag: "GIS + Remote Sensing", num: "Field Note 04",
    points: ["Applied GIS and remote sensing concepts for spatial analysis.", "Worked with QGIS and ArcGIS for mapping and visualization."],
    cert: ["images/certs/geo-vigyan-2024.jpg"], photo: ["images/experience/geo-vigyan-2024.jpg", "images/contour.png"], photoCap: "QGIS / ArcGIS",
    lay: { cert: [52, 34, 250, -3], note: [20, 52, 310, 3], photo: [4, 4, 270, 4], tag: [66, 6, 0, -2] }, bend: [-22, 24, -20, 22] }
];

const certifications = [
  { name: "ADD CERTIFICATION NAME", org: "ADD ISSUING ORGANIZATION", date: "ADD DATE", link: "#" },
  { name: "ADD CERTIFICATION NAME", org: "ADD ISSUING ORGANIZATION", date: "ADD DATE", link: "#" }
];

/* =========================================================
   INTERFACE CODE
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const img = (src, alt) => `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()">`;

/* Nav rail + active marker */
$("#rail").innerHTML = sections.map(([id, l]) => `<a href="#${id}" data-id="${id}">${l}</a>`).join("");
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) document.querySelectorAll(".rail a").forEach(a => a.classList.toggle("on", a.dataset.id === e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(([id]) => spy.observe(document.getElementById(id)));

/* Reveal on scroll + red thread draw */
const rv = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  if (e.target.closest(".board")) e.target.closest(".board").classList.add("go");
  rv.unobserve(e.target);
}), { threshold: .15, rootMargin: "0px 0px -6% 0px" });

/* Auto-stagger: children of [data-stagger] fade in one after another */
document.querySelectorAll("[data-stagger]").forEach(p => [...p.children].forEach((c, i) => {
  c.classList.add("reveal", ...(p.dataset.stagger || "").split(" ").filter(Boolean));
  c.style.setProperty("--d", i * 90 + "ms");
}));
/* Section headings get the animated rule */
document.querySelectorAll("section > h2, h2.sub").forEach(h => h.classList.add("reveal"));

/* Scroll progress bar */
const bar = $("#progress");
let tick = false;
const paint = () => { const m = document.documentElement.scrollHeight - innerHeight; bar.style.transform = `scaleX(${m > 0 ? scrollY / m : 0})`; tick = false; };
addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(paint); } }, { passive: true });
paint();

/* Replay a short fade/slide when content swaps */
const swap = el => { el.classList.remove("swap"); void el.offsetWidth; el.classList.add("swap"); };

/* Experience — interactive circular career archive */
const exp = $("#exp"), list = $("#tlList"), arch = $("#xArch"), svg = $("#xSvg"), sec = $("#timeline");
const pad = n => String(n + 1).padStart(2, "0");
const isMobile = () => matchMedia("(max-width:980px)").matches;
const wait = ms => new Promise(r => setTimeout(r, ms));
let sel = -1, token = 0, orbitTimer = null, orbitAngle = 0;

list.innerHTML = experience.map((x, i) => `
  <li class="orbit-node node-${i}" data-n="${pad(i)}" data-i="${i}" tabindex="0" role="button" aria-expanded="false">
    <span class="node-number">${pad(i)}</span>
    <span class="node-copy"><strong>${esc(x.org)}</strong><small>${esc(x.date)}</small></span>
    <span class="node-explore">EXPLORE →</span>
  </li>`).join("");
const rows = [...list.children];
const NS = "http://www.w3.org/2000/svg";

/* Lightbox for certificates */
const lb = document.createElement("div");
lb.className = "x-lb";
lb.innerHTML = "<button aria-label=\"Close\">×</button><img alt=\"\">";
document.body.appendChild(lb);
const closeLb = () => lb.classList.remove("on");
lb.addEventListener("click", closeLb);

function loadInto(box, srcs, alt) {
  const q = srcs.slice();
  const next = () => {
    if (!q.length) { box.classList.add("empty"); return; }
    const im = new Image(); im.alt = alt;
    im.onload = () => { box.appendChild(im); box.classList.add("has"); };
    im.onerror = next; im.src = q.shift();
  };
  next();
}

/* Fixed, art-directed positions. Each selected experience gets its own
   four-point archive composition so the threads stay readable and never
   rely on random placement. */
const archiveLayouts = [
  [
    {type:"cert", x:6, y:8, w:25, r:-3}, {type:"photo", x:68, y:8, w:25, r:3},
    {type:"note", x:62, y:58, w:29, r:1.5}, {type:"tag", x:7, y:68, w:22, r:-2}
  ],
  [
    {type:"cert", x:5, y:10, w:25, r:3}, {type:"photo", x:68, y:8, w:25, r:-3},
    {type:"note", x:7, y:57, w:29, r:-1.5}, {type:"tag", x:70, y:69, w:22, r:2}
  ],
  [
    {type:"cert", x:66, y:7, w:25, r:3}, {type:"photo", x:7, y:8, w:25, r:-3},
    {type:"note", x:62, y:57, w:29, r:1.5}, {type:"tag", x:7, y:69, w:22, r:-2}
  ],
  [
    {type:"cert", x:7, y:8, w:25, r:-3}, {type:"photo", x:68, y:8, w:25, r:3},
    {type:"note", x:7, y:57, w:29, r:-1.5}, {type:"tag", x:70, y:69, w:22, r:2}
  ]
];

function itemsFor(x, i) {
  const L = archiveLayouts[i];
  const st = a => `--x:${a.x}%;--y:${a.y}%;--w:${a.w}%;--r:${a.r}deg`;
  return [
    `<div class="x-it x-print x-cert" data-kind="cert" style="${st(L[0])}" tabindex="0" role="button" aria-label="Open certificate">
      <i class="x-pin"></i><div class="x-img" data-hint="CERTIFICATE"></div><span class="x-cap">01 / CERTIFICATE</span><span class="x-view">VIEW ↗</span>
    </div>`,
    `<div class="x-it x-print x-photo" data-kind="photo" style="${st(L[1])}">
      <span class="x-tape"></span><i class="x-pin"></i><div class="x-img" data-hint="PROJECT / EXPERIENCE PHOTOGRAPH"></div><span class="x-cap hand">${esc(x.photoCap)}</span>
    </div>`,
    `<div class="x-it x-note" data-kind="note" style="${st(L[2])}">
      <i class="x-pin"></i><span class="x-tag">EXPERIENCE NOTE</span><h3>${esc(x.org)}</h3>
      ${x.position ? `<p class="x-role">${esc(x.position)}</p>` : ""}<p class="x-date">${esc(x.date)}</p>
      <ul>${x.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
    </div>`,
    `<div class="x-it x-label" data-kind="tag" style="${st(L[3])}">
      <i class="x-pin"></i><span>${esc(x.tag)}</span><small>${esc(x.num)}</small>
    </div>`
  ];
}

function targetPoint(el, box) {
  const b = el.getBoundingClientRect(), r = box.getBoundingClientRect();
  const left = b.left - r.left, top = b.top - r.top;
  return {x:left + b.width/2, y:top + b.height/2};
}

function drawThreads(i) {
  svg.innerHTML = "";
  const center = exp.getBoundingClientRect();
  const selected = rows[i].getBoundingClientRect();
  const ax = selected.left - center.left + selected.width/2;
  const ay = selected.top - center.top + selected.height/2;
  const targets = [...arch.querySelectorAll(".x-it")].map(el => targetPoint(el, exp));

  targets.forEach((t, k) => {
    const dx = t.x-ax, dy=t.y-ay, len=Math.hypot(dx,dy)||1;
    const nx=-dy/len, ny=dx/len;
    const bends=[34,-30,26,-24];
    const b=bends[k];
    const c1=[ax+dx*.30+nx*b, ay+dy*.12+ny*b];
    const c2=[ax+dx*.78+nx*b*.58, ay+dy*.76+ny*b*.58];
    const path=document.createElementNS(NS,"path");
    path.setAttribute("class","x-th");
    path.setAttribute("pathLength","1");
    path.setAttribute("d",`M${ax} ${ay} C${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${t.x} ${t.y}`);
    path.style.setProperty("--thread-delay",`${k*180}ms`);
    svg.appendChild(path);
    requestAnimationFrame(()=>setTimeout(()=>path.classList.add("draw"),120+k*170));
  });
}

function clearArchive() {
  svg.innerHTML="";
  arch.innerHTML="";
}

function buildArchive(i, my) {
  clearArchive();
  const x=experience[i];
  arch.innerHTML=itemsFor(x,i).join("");
  const els=[...arch.children];
  loadInto(els[0].querySelector(".x-img"),x.cert,"Certificate — "+x.org);
  loadInto(els[1].querySelector(".x-img"),x.photo,x.photoCap);

  els[0].addEventListener("click",()=>{
    const im=els[0].querySelector("img");
    if(im){lb.querySelector("img").src=im.src;lb.classList.add("on");}
  });
  els[0].addEventListener("keydown",e=>{
    if(e.key==="Enter"||e.key===" "){e.preventDefault();els[0].click();}
  });

  els.forEach((el,k)=>setTimeout(()=>{
    if(my!==token)return;
    el.classList.add("in");
  },340+k*170));

  setTimeout(()=>{if(my===token)drawThreads(i);},420);
}

function startOrbit() {
  if (isMobile() || sel >= 0) return;
  stopOrbit();
  orbitTimer=setInterval(()=>{
    orbitAngle=(orbitAngle+0.08)%360;
    exp.style.setProperty("--orbit-rotation",`${orbitAngle}deg`);
  },40);
}
function stopOrbit() {
  if(orbitTimer){clearInterval(orbitTimer);orbitTimer=null;}
}
function openExp(i) {
  const my=++token;
  sel=i;
  stopOrbit();
  exp.classList.add("is-selected");
  sec.classList.add("is-open");
  rows.forEach((r,k)=>{
    r.classList.toggle("on",k===i);
    r.setAttribute("aria-expanded",k===i);
  });
  $("#orbitInstruction").textContent="SELECTED ARCHIVE · ESC TO RETURN";
  buildArchive(i,my);
}
function closeExp() {
  if(sel<0)return;
  const my=++token;
  sel=-1;
  retract();
  rows.forEach(r=>{r.classList.remove("on");r.setAttribute("aria-expanded","false");});
  exp.classList.remove("is-selected");
  sec.classList.remove("is-open");
  $("#orbitInstruction").textContent="HOVER TO EXPLORE · CLICK TO UNFOLD";
  setTimeout(()=>{if(my===token){clearArchive();startOrbit();}},360);
}
function retract(){
  arch.querySelectorAll(".x-it").forEach(e=>e.classList.remove("in"));
  svg.querySelectorAll(".x-th").forEach(e=>e.classList.remove("draw"));
}
rows.forEach((r,i)=>{
  r.addEventListener("click",()=>sel===i?closeExp():openExp(i));
  r.addEventListener("keydown",e=>{
    if(e.key==="Enter"||e.key===" "){e.preventDefault();r.click();}
  });
});
$("#xBack").addEventListener("click",closeExp);
document.addEventListener("keydown",e=>{
  if(e.key==="Escape") lb.classList.contains("on")?closeLb():closeExp();
});
addEventListener("resize",()=>{
  if(sel>=0) setTimeout(()=>drawThreads(sel),80);
  else startOrbit();
});
startOrbit();

/* Certifications */
$("#certList").innerHTML = certifications.map((c, i) => `<li class="reveal from-right" style="--d:${i * 120}ms"><strong>${esc(c.name)}</strong><span>${esc(c.date)}</span><span>${esc(c.org)}</span><a href="${esc(c.link)}">Certificate ↗</a></li>`).join("");
document.querySelectorAll(".reveal, .line").forEach(el => rv.observe(el));

/* Archive carousel: curved, draggable, arrow/keyboard driven */
let cur = 0;
const stage = $("#stage");
stage.innerHTML = projects.map((p, i) => `<div class="card${p.fit ? ' contain' : ''}" data-i="${i}">${img(p.image, p.title)}<b>${esc(p.title)}</b></div>`).join("");
const cards = [...stage.children];
function layout() {
  const w = stage.clientWidth < 600 ? 150 : 250;
  cards.forEach((c, i) => {
    const d = i - cur, a = Math.abs(d);
    c.style.transform = `translateX(${d * w}px) translateZ(${-a * 90}px) rotateY(${d * -16}deg) scale(${1 - a * .06})`;
    c.style.opacity = a > 3 ? 0 : 1 - a * .18;
    c.style.zIndex = 10 - a; c.style.pointerEvents = a > 3 ? "none" : "auto";
  });
  const p = projects[cur];
  $("#stageInfo").innerHTML = `<h3>${esc(p.title)}</h3><div class="meta-line">${esc(p.year)} · ${esc(p.dataset)} · ${p.tools.map(esc).join(", ")}</div><p>${esc(p.description)}</p>${p.link && p.link !== "#" ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">Project link ↗</a>` : ""}`;
}
const go = n => { const was = cur; cur = Math.max(0, Math.min(projects.length - 1, n)); layout(); if (cur !== was) swap($("#stageInfo")); };
$("#prev").onclick = () => go(cur - 1); $("#next").onclick = () => go(cur + 1);
cards.forEach(c => c.addEventListener("click", () => go(+c.dataset.i)));
let sx = null;
stage.addEventListener("pointerdown", e => sx = e.clientX);
addEventListener("pointerup", e => { if (sx !== null && Math.abs(e.clientX - sx) > 40) go(cur + (e.clientX < sx ? 1 : -1)); sx = null; });
addEventListener("resize", layout); layout();

/* Major projects: rotating ring (mouse + touch via pointer events) */
const ring = $("#ring"), R = 302, STEP = 38;
let rot = 0, active = 0, ready = false;
ring.innerHTML = majorProjects.map((p, i) => `<div class="node" data-i="${i}" title="${esc(p.title)}">${img(p.image, p.title)}<span>${i + 1}</span></div>`).join("");
const nodes = [...ring.children];
function spin(deg) { // rotate ring, keep nodes upright
  rot = deg; ring.style.transform = `rotate(${rot}deg)`;
  nodes.forEach((n, i) => { const a = i * STEP; n.style.transform = `rotate(${a}deg) translateX(${R}px) rotate(${-a - rot}deg)`; });
}
function select(i) {
  const was = active;
  active = Math.max(0, Math.min(majorProjects.length - 1, i)); spin(-active * STEP);
  nodes.forEach((n, k) => n.classList.toggle("act", k === active));
  const p = majorProjects[active];
  $("#panel").innerHTML = `${img(p.image, p.title)}<h3>${esc(p.title)}</h3><div class="tags">${p.tools.map(t => `<span>${esc(t)}</span>`).join("")}</div><p>${esc(p.description)}</p>${p.link !== "#" ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">View project ↗</a>` : ""}`;
  if (ready && active !== was) swap($("#panel"));
}
const ringCenter = () => { const b = ring.getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2 }; };
let drag = null;
ring.addEventListener("pointerdown", e => {
  const c = ringCenter(); drag = { a: Math.atan2(e.clientY - c.y, e.clientX - c.x), r0: rot, moved: false };
  ring.classList.add("drag"); ring.setPointerCapture(e.pointerId);
});
ring.addEventListener("pointermove", e => {
  if (!drag) return; const c = ringCenter();
  const d = (Math.atan2(e.clientY - c.y, e.clientX - c.x) - drag.a) * 180 / Math.PI;
  if (Math.abs(d) > 2) drag.moved = true;
  spin(Math.max(-(majorProjects.length - 1) * STEP - 15, Math.min(15, drag.r0 + d)));
});
const end = e => {
  if (!drag) return; const moved = drag.moved; drag = null; ring.classList.remove("drag");
  if (moved) select(Math.round(-rot / STEP));
  else { const n = document.elementFromPoint(e.clientX, e.clientY)?.closest(".node"); if (n) select(+n.dataset.i); }
};
ring.addEventListener("pointerup", end); ring.addEventListener("pointercancel", end);
ring.tabIndex = 0;
ring.addEventListener("keydown", e => { if (e.key === "ArrowDown" || e.key === "ArrowRight") select(active + 1); if (e.key === "ArrowUp" || e.key === "ArrowLeft") select(active - 1); });
select(0); ready = true;


/* Route map — Margao (B.Sc.) and Pune (M.Sc.) with cards pinned on the map */
(function () {
  const el = $("#routeMap");
  if (!el || typeof L === "undefined") { if (el) el.textContent = "Map could not load."; return; }
  const cities = [
    { key: "margao", n: 1, ll: [15.2832, 73.9862], when: "2022–2025 · Margao, Goa", title: "Goa University", degree: "Bachelor of Science, Geology", wide: "left", narrow: "bottom" },
    { key: "pune", n: 2, ll: [18.5204, 73.8567], when: "2025–2027 · Pune, Maharashtra", title: "Bharati Vidyapeeth Institute of Environment Education and Research", degree: "Master of Science, Geoinformatics", wide: "right", narrow: "top" }
  ];
  const map = L.map(el, { scrollWheelZoom: false });

  /* No-API-key basemaps (Esri) + OpenStreetMap; switch from the layer control */
  const esri = (svc, name) => L.tileLayer(`https://server.arcgisonline.com/ArcGIS/rest/services/${svc}/MapServer/tile/{z}/{y}/{x}`, { maxZoom: 18, attribution: "Tiles &copy; Esri" });
  const topo = esri("World_Topo_Map"), streets = esri("World_Street_Map"), sat = esri("World_Imagery");
  const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' });
  topo.addTo(map);
  L.control.layers({ "Topographic": topo, "Streets": streets, "Satellite": sat, "OpenStreetMap": osm }, null, { position: "topright" }).addTo(map);

  const line = L.polyline(cities.map(c => c.ll), { color: "#c2502e", weight: 4, dashArray: "2 10", lineCap: "round" }).addTo(map);

  const markers = cities.map(c => {
    const icon = L.divIcon({ className: "", html: `<div class="city-pin"><span></span><b>${c.n}</b></div>`, iconSize: [38, 48], iconAnchor: [19, 48] });
    return L.marker(c.ll, { icon, title: c.title, riseOnHover: true }).addTo(map);
  });

  let mode = "";
  const bindCards = () => {
    const narrow = el.clientWidth < 760;
    if (mode === (narrow ? "n" : "w")) return;
    mode = narrow ? "n" : "w";
    const off = narrow ? 14 : 22;
    cities.forEach((c, k) => {
      const dir = narrow ? c.narrow : c.wide;
      const offset = dir === "left" ? [-off, -24] : dir === "right" ? [off, -24] : dir === "top" ? [0, -52] : [0, 0];
      markers[k].unbindTooltip().bindTooltip(
        `<i></i><small>${esc(c.when)}</small><h3>${esc(c.title)}</h3><p>${esc(c.degree)}</p>`,
        { permanent: true, direction: dir, offset, className: `card-tip t-${c.key}`, interactive: false }
      ).openTooltip();
    });
  };
  const fit = () => {
    map.invalidateSize();
    bindCards();
    const narrow = el.clientWidth < 760;
    map.fitBounds(line.getBounds(), { paddingTopLeft: narrow ? [30, 150] : [60, 70], paddingBottomRight: narrow ? [30, 120] : [60, 70], maxZoom: 8 });
  };
  fit();
  addEventListener("resize", fit);
  setTimeout(fit, 1200); // after the reveal animation settles
})();
