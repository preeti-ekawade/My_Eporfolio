/* =========================================================
   EDITABLE CONTENT — change data here, interface code is below
   ========================================================= */
const sections = [ // right-side navigation
  ["metadata", "Metadata"], ["route", "Route"], ["skills", "Skills"],
  ["timeline", "Experience"], ["archive", "The Archive"], ["reflections", "Reflections"], ["contact", "Get in Touch"]
];

// Archive — one object per project. Images live in /images/archive (extracted from the Archive PDF).
// `links` use the exact URLs from the Archive PDF. Add a project by adding an object here.
const projects = [
  { type: "ArcGIS Dashboard", title: "Campus Tree Dashboard",
    description: "An interactive ArcGIS dashboard visualizing tree health, height, species distribution, and biodiversity observations across 22 campus zones to support urban forestry management.",
    thumb: { src: "assets/archive-thumbs/campus-tree-dashboard.png", cap: "Campus Tree Dashboard thumbnail" },
    images: [],
    links: [{ label: "View Dashboard", url: "https://www.arcgis.com/apps/dashboards/6588f5e2ae86443fbc5f6bf67f228234" }] },
  { type: "ArcGIS StoryMap", title: "Fading Colours of India’s Underwater Gardens",
    description: "An ArcGIS StoryMap exploring India’s major coral reef regions, bleaching hotspots, environmental stressors, and conservation efforts through geospatial mapping and visual storytelling.",
    thumb: { src: "assets/archive-thumbs/coral-reef-storymap.png", cap: "Fading Colours of India’s Underwater Gardens thumbnail" },
    images: [],
    links: [{ label: "View StoryMap", url: "https://storymaps.arcgis.com/stories/431844aef0834a36ade4ae0c9df240d1" }] },
  { type: "Web Portal", title: "Comparative Vegetation Analysis: MODIS, Landsat 9 & Sentinel-2",
    description: "An interactive web portal comparing vegetation across three Goa talukas using MODIS NDVI, Landsat 9, and Sentinel-2 imagery to demonstrate differences in spatial resolution and applications.",
    tags: ["MODIS NDVI", "Landsat 9", "Sentinel-2"],
    thumb: { src: "assets/archive-thumbs/vegetation-analysis.png", cap: "Comparative vegetation analysis thumbnail" },
    images: [],
    links: [{ label: "View Website", url: "https://preeti-ekawade.github.io/COMPARITIVE-VEGETATION-ANALYSIS/" }] },
  { type: "Google Earth Engine App", title: "NAPA Forest Fire Analysis",
    description: "An interactive Google Earth Engine dashboard assessing forest fire severity and vegetation recovery using Sentinel-2 imagery, NBR, dNBR, and NDVI.",
    tags: ["Sentinel-2", "NBR", "dNBR", "NDVI"],
    thumb: { src: "assets/archive-thumbs/napa-forest-fire.png", cap: "NAPA Forest Fire Analysis thumbnail" },
    images: [],
    links: [{ label: "View Dashboard", url: "https://preeti-ee.projects.earthengine.app/view/napaforestfire" }] },
  { type: "Google Earth Engine App", title: "Assam Flood Mapping and Classification – 2022",
    description: "A flood mapping analysis using Sentinel-1 SAR and CHIRPS rainfall data to identify flooded areas, compare flood periods, and visualize spatial flood patterns.",
    tags: ["Sentinel-1 SAR", "CHIRPS"],
    thumb: { src: "assets/archive-thumbs/assam-flood-2022.png", cap: "Assam Flood Mapping thumbnail" },
    images: [],
    links: [{ label: "View Map", url: "https://preeti-ee.projects.earthengine.app/view/flood-mapping-of-assam-2022" }] },
  { type: "Web Application", title: "Crop Type Mapping – Shahbad, Haryana",
    description: "A multi-temporal Sentinel-1 SAR and Random Forest classification project mapping paddy, sugarcane, other crops, and fallow/non-agricultural land during Kharif 2025, with accuracy assessment and interactive web publication.",
    tags: ["Sentinel-1 SAR", "Random Forest"],
    thumb: { src: "assets/archive-thumbs/crop-type-mapping.png", cap: "Crop Type Mapping thumbnail" },
    images: [],
    links: [{ label: "View Website", url: "https://preeti-ekawade.github.io/Crop-Type-Mapping/" }] },
  { type: "Land Use / Land Cover", title: "Spatial Analysis of Land Use/Land Cover Changes in Singapore",
    description: "A supervised classification study comparing LULC maps from 1990 and 2024 to visualize urban expansion, vegetation changes, and the transformation of natural landscapes.",
    tags: ["Supervised classification", "1990 vs 2024"],
    thumb: { src: "assets/archive-thumbs/singapore-lulc.png", cap: "Singapore LULC thumbnail" },
    images: [{ src: "images/archive/singapore-lulc-1990.jpg", cap: "Spatial distribution of LULC classes in Singapore (1990)" },
             { src: "images/archive/singapore-lulc-2024.jpg", cap: "Spatial distribution of LULC classes in Singapore (2024)" }],
    links: [] },
  { type: "ArcGIS ModelBuilder", title: "Drainage Network Analysis in Mandovi Basin Using ArcGIS ModelBuilder",
    description: "A GIS-based watershed analysis using stream order, drainage density, aspect, and contour mapping to examine drainage patterns and topographic characteristics of the Mandovi River Basin.",
    tags: ["Stream order", "Drainage density", "Aspect", "Contour"],
    thumb: { src: "assets/archive-thumbs/mandovi-drainage.png", cap: "Mandovi Basin drainage thumbnail" },
    images: [{ src: "images/archive/mandovi-stream-order.jpg", cap: "Strahler stream order network, Mandovi River Basin, Goa" },
             { src: "images/archive/mandovi-watershed.jpg", cap: "Watershed delineation of Mandovi River Basin, Goa" },
             { src: "images/archive/mandovi-stream-density.jpg", cap: "Spatial distribution of stream density, Mandovi River Basin" },
             { src: "images/archive/mandovi-contour.jpg", cap: "Topographical contour representation, Mandovi River Basin" },
             { src: "images/archive/mandovi-aspect.jpg", cap: "Terrain aspect classification, Mandovi River Basin, Goa" }],
    links: [] },
  { type: "Python Remote Sensing", title: "Time-Series NDVI Animation for India",
    description: "A Python-based remote sensing project generating an NDVI animation to visualize seasonal and long-term vegetation changes across India using satellite imagery.",
    tags: ["Python", "NDVI", "Time series"],
    thumb: { src: "assets/archive-thumbs/ndvi-animation.png", cap: "Time-Series NDVI Animation thumbnail" },
    images: [],
    links: [] }, // PDF lists "Time Series Animation Gif" only as a relative link with no file attached — see delivery notes
  { type: "Python + Google Earth Engine", title: "Python-Based Spectral Index Analysis Using Google Earth Engine",
    description: "A Python and Google Earth Engine workflow developed in Google Colab to calculate and visualize NDVI, SAVI, NDWI, and NDBI through automated satellite image processing and spectral band mathematics.",
    tags: ["Google Colab", "NDVI", "SAVI", "NDWI", "NDBI"],
    thumb: { src: "assets/archive-thumbs/spectral-index.png", cap: "Spectral Index Analysis thumbnail" },
    images: [{ src: "images/archive/spectral-savi.jpg", cap: "Soil Adjusted Vegetation Index (SAVI), Bardez, Tiswadi & Mormugao Talukas, Goa" },
             { src: "images/archive/spectral-ndbi.jpg", cap: "Normalized Difference Built-up Index (NDBI)" },
             { src: "images/archive/spectral-ndvi.jpg", cap: "Normalized Difference Vegetation Index (NDVI)" },
             { src: "images/archive/spectral-ndmi.jpg", cap: "Normalized Difference Moisture Index (NDMI)" },
             { src: "images/archive/spectral-ndwi.jpg", cap: "Normalized Difference Water Index (NDWI)" }],
    links: [] }
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

/* Semester reflections — accessible page-turning spatial journal */
const reflectionPages = [
  { category:"REMOTE SENSING", subject:"Advanced Remote Sensing", subtitle:"Beyond the Visible", tags:["MICROWAVE","SAR","LiDAR","HYPERSPECTRAL"],
    reflection:"This subject helped me understand advanced remote sensing techniques, including microwave remote sensing, SAR, LiDAR, and hyperspectral imaging. I learned how radar signals interact with different surface features and how LiDAR and hyperspectral data are used to study vegetation, terrain, and environmental conditions. The introduction to SAR data processing using ESA SNAP helped me connect theoretical concepts with practical applications. This subject improved my understanding of satellite data and its role in agricultural and environmental monitoring.",
    key:"Understanding how different remote sensing technologies help us study the Earth's surface.", leftTitle:"Learning to read the Earth", leftText:"Notes on sensors, signals, and the spatial patterns hidden beyond visible imagery." },
  { category:"DATA ANALYSIS", subject:"Big Data Analysis", subtitle:"Making Sense of Data", tags:["PYTHON","ANALYSIS","VISUALISATION"],
    reflection:"Big Data Analysis introduced me to Python, data analysis, and visualisation. I learned how data can be organised, processed, and analysed to identify patterns and present information through charts and graphs. The subject helped me understand the importance of data quality and systematic analysis. I would like to improve my programming skills further and apply data analysis techniques to geospatial datasets and future machine learning projects.",
    key:"Turning raw data into meaningful information through analysis and visualisation.", leftTitle:"Finding patterns in data", leftText:"A reminder that careful processing and clear visualisation help make complex information easier to understand." },
  { category:"SPATIAL DATABASES", subject:"Techniques of Geospatial Database Management", subtitle:"Behind Every Map", tags:["SQL","POSTGRESQL","POSTGIS"],
    reflection:"This subject helped me understand how geospatial data is stored, organised, and managed using SQL, PostgreSQL, and PostGIS. I learned about attribute queries, spatial queries, selection, filtering, and managing vector and raster data. These concepts helped me understand how databases make spatial information easier to access and analyse. I also learned the importance of proper data management in GIS projects and how spatial databases support efficient geospatial analysis.",
    key:"Managing and querying spatial data efficiently for accurate GIS analysis.", leftTitle:"The structure behind maps", leftText:"Spatial databases organise geographic information so it can be retrieved, connected, and analysed with purpose." },
  { category:"REAL-WORLD APPLICATIONS", subject:"Applications of Geospatial Technologies", subtitle:"Geospatial in Action", tags:["AGRICULTURE","ENVIRONMENT","GIS"],
    reflection:"This subject showed me how GIS and remote sensing can be applied to real-world challenges such as forest fire risk mapping, drought monitoring, flood hazards, forest biomass estimation, and urban heat islands. The precision farming topic was particularly relevant to my interests because it demonstrated how geospatial technologies can support agricultural monitoring and decision-making. I gained a better understanding of how spatial data and analytical techniques can be used to study environmental problems and develop practical solutions.",
    key:"Applying geospatial technologies to understand real-world problems and support better decision-making.", leftTitle:"From spatial data to action", leftText:"Maps and spatial analysis become meaningful when they help explain real challenges and inform better decisions." }
];
let activeReflectionPage = 0;
const bookEls = {
  page: document.getElementById("reflectionBookPage"), number: document.getElementById("reflectionBookPageNumber"), category: document.getElementById("reflectionBookPageCategory"),
  subject: document.getElementById("reflectionBookSubject"), subtitle: document.getElementById("reflectionBookSubtitle"), tags: document.getElementById("reflectionBookTags"),
  reflection: document.getElementById("reflectionBookReflection"), key: document.getElementById("reflectionBookKeyLearning"), footer: document.getElementById("reflectionBookPageFooter"),
  leftTitle: document.getElementById("reflectionBookLeftTitle"), leftText: document.getElementById("reflectionBookLeftText"), prev: document.getElementById("reflectionBookPrev"), next: document.getElementById("reflectionBookNext"),
  progressFill: document.getElementById("reflectionBookProgressFill"), progressText: document.getElementById("reflectionBookProgressText")
};
let reflectionIsTurning = false;
function renderReflectionPage(index, direction = "next") {
  const targetIndex = Math.max(0, Math.min(reflectionPages.length - 1, index));
  if (targetIndex === activeReflectionPage || reflectionIsTurning) return;
  const page = bookEls.page;
  reflectionIsTurning = true;
  page.classList.remove("turning-out-next", "turning-out-prev", "turning-in-next", "turning-in-prev");
  page.classList.add(direction === "prev" ? "turning-out-prev" : "turning-out-next");

  // Turn the visible page away first, then replace its content at the fold.
  window.setTimeout(() => {
    activeReflectionPage = targetIndex;
    const item = reflectionPages[activeReflectionPage];
    bookEls.number.textContent = `${String(activeReflectionPage + 1).padStart(2,"0")} / 04`;
    bookEls.category.textContent = item.category;
    bookEls.subject.textContent = item.subject;
    bookEls.subtitle.textContent = item.subtitle;
    bookEls.tags.innerHTML = item.tags.map(tag => `<span>${esc(tag)}</span>`).join("");
    bookEls.reflection.textContent = item.reflection;
    bookEls.key.textContent = item.key;
    bookEls.footer.textContent = String(activeReflectionPage + 1).padStart(2,"0");
    bookEls.leftTitle.textContent = item.leftTitle;
    bookEls.leftText.textContent = item.leftText;
    bookEls.prev.disabled = activeReflectionPage === 0;
    bookEls.next.disabled = activeReflectionPage === reflectionPages.length - 1;
    bookEls.progressFill.style.width = `${((activeReflectionPage + 1) / reflectionPages.length) * 100}%`;
    bookEls.progressText.textContent = `${String(activeReflectionPage + 1).padStart(2,"0")} — 04`;
    page.setAttribute("aria-label", `Subject ${activeReflectionPage + 1} of 4: ${item.subject}`);

    page.classList.remove("turning-out-next", "turning-out-prev");
    page.classList.add(direction === "prev" ? "turning-in-prev" : "turning-in-next");
    requestAnimationFrame(() => requestAnimationFrame(() => {
      page.classList.remove("turning-in-next", "turning-in-prev");
    }));
    window.setTimeout(() => { reflectionIsTurning = false; }, 460);
  }, 260);
}
bookEls.prev.addEventListener("click", () => renderReflectionPage(activeReflectionPage - 1, "prev"));
bookEls.next.addEventListener("click", () => renderReflectionPage(activeReflectionPage + 1, "next"));

// Touch and pointer swipes turn the reflection page on mobile and touch-enabled laptops.
const reflectionSwipeSurface = document.getElementById("reflectionBook");
let reflectionTouchStartX = 0;
let reflectionTouchStartY = 0;
reflectionSwipeSurface.addEventListener("touchstart", event => {
  const touch = event.changedTouches[0];
  reflectionTouchStartX = touch.clientX;
  reflectionTouchStartY = touch.clientY;
}, { passive: true });
reflectionSwipeSurface.addEventListener("touchend", event => {
  const touch = event.changedTouches[0];
  const dx = touch.clientX - reflectionTouchStartX;
  const dy = touch.clientY - reflectionTouchStartY;
  if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
  if (dx < 0 && activeReflectionPage < reflectionPages.length - 1) renderReflectionPage(activeReflectionPage + 1, "next");
  if (dx > 0 && activeReflectionPage > 0) renderReflectionPage(activeReflectionPage - 1, "prev");
}, { passive: true });
document.addEventListener("keydown", event => {
  const section = document.getElementById("reflections");
  if (!section || !section.contains(document.activeElement)) return;
  if (event.key === "ArrowLeft" && !bookEls.prev.disabled) renderReflectionPage(activeReflectionPage - 1, "prev");
  if (event.key === "ArrowRight" && !bookEls.next.disabled) renderReflectionPage(activeReflectionPage + 1, "next");
});


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

/* Experience — clickable sketchbook archive */
const experienceEntries = [
  { org:"EarthSight Foundation", date:"May 2026 — Ongoing", short:"LANDSCAPE RESTORATION", title:"Reading change across the landscape", left:"A record of multi-temporal satellite analysis and landscape restoration mapping.", points:["Analyzed historical LULC, LST, and NDVI changes using multi-temporal satellite data to track land transformation at Pashan-Baner hill.","Produced spatial analysis maps for the official Forest Landscape Restoration Report."], media:[{src:"images/experience/earthsight-pashan-baner.jpg",caption:"Pashan-Baner hill"},{src:"images/experience/earthsight-forest-site.jpg",caption:"Forest landscape"}]},
  { org:"India Space Lab", date:"May 2026 — June 2026", short:"SPACE SCIENCE & TECHNOLOGY", title:"Exploring systems beyond the map", left:"A technical learning entry connecting geospatial interests with space science, autonomous systems and engineering applications.", points:["Worked on PID Controller Tuning and Autonomous Navigation projects.","Contributed to a project on Heat Wave Response, Recovery, Future Challenges, and Technology Support.","Evaluated rocket fin structural and aerodynamic performance via SimScale."], media:[{src:"images/certs/india-space-lab.jpg",caption:"Summer Internship & Technical Training Program 2026",type:"certificate"}]},
  { org:"Geo Vigyan", date:"Dec 2024 — Jan 2025", short:"MACHINE LEARNING & ENVIRONMENT", title:"Mapping environmental vulnerability", left:"A research-focused entry exploring how remote sensing and machine learning can support environmental assessment.", points:["Conducted ML-based environmental vulnerability analysis using remote sensing.","Performed spatial analysis and mapping using Google Earth Engine."], media:[{src:"images/certs/geo-vigyan-2025.jpg",caption:"Virtual Winter Internship 2024–25",type:"certificate"}]},
  { org:"Geo Vigyan", date:"Dec 2023 — Jan 2024", short:"GIS & REMOTE SENSING", title:"Building a foundation in spatial analysis", left:"An early step in developing practical skills in GIS, remote sensing, mapping and visualisation.", points:["Applied GIS and remote sensing concepts for spatial analysis.","Worked with QGIS and ArcGIS for mapping and visualization."], media:[{src:"images/certs/geo-vigyan-2024.jpg",caption:"Virtual Summer Internship 2023",type:"certificate"}]}
];
const experienceIndex = $("#experienceIndex"), bookWrap = $("#experienceBookWrap");
let activeExperience = -1;
experienceIndex.innerHTML = experienceEntries.map((x,i)=>`<button class="experience-entry" type="button" data-experience="${i}" aria-controls="experienceBookWrap" aria-expanded="false"><span class="entry-no">${String(i+1).padStart(2,"0")}</span><span class="entry-copy"><strong>${esc(x.org)}</strong><small>${esc(x.date)} &nbsp; / &nbsp; ${esc(x.short)}</small></span><span class="entry-open" aria-hidden="true">↗</span></button>`).join("");
const entryButtons = [...experienceIndex.querySelectorAll(".experience-entry")];
const bookLightbox = document.createElement("div");
bookLightbox.className = "experience-lightbox";
bookLightbox.innerHTML = '<button type="button" aria-label="Close image">×</button><img alt="">';
document.body.appendChild(bookLightbox);
const closeBookLightbox = () => bookLightbox.classList.remove("open");
bookLightbox.addEventListener("click", e => { if(e.target === bookLightbox || e.target.tagName === "BUTTON") closeBookLightbox(); });

function renderExperience(index, shouldScroll=false){
  const x = experienceEntries[index];
  if(!x) return;
  activeExperience = index;
  entryButtons.forEach((b,i)=>b.setAttribute("aria-expanded", String(i===index)));
  $("#bookNumber").textContent = String(index+1).padStart(2,"0");
  $("#bookDateLeft").textContent = x.date;
  $("#bookLeftTitle").textContent = x.title;
  $("#bookLeftNote").textContent = x.left;
  $("#bookPageLeft").textContent = String(index*2+1).padStart(2,"0");
  $("#bookOrgShort").textContent = x.short;
  $("#bookPageRight").textContent = `${String(index*2+2).padStart(2,"0")} / 08`;
  $("#bookTitle").textContent = x.org;
  $("#bookRole").textContent = x.date;
  $("#bookCounter").textContent = `${String(index+1).padStart(2,"0")} / 04`;
  $("#bookPoints").innerHTML = x.points.map(p=>`<li>${esc(p)}</li>`).join("");
  $("#bookMedia").innerHTML = x.media.map(m=>`<figure class="${m.type==='certificate'?'certificate':''}" tabindex="0" role="button" aria-label="View ${esc(m.caption)}"><img src="${esc(m.src)}" alt="${esc(m.caption)}" loading="lazy"><figcaption>${esc(m.caption)}</figcaption></figure>`).join("");
  $("#bookPrev").disabled = index===0;
  $("#bookNext").disabled = index===experienceEntries.length-1;
  bookWrap.hidden = false;
  bookWrap.classList.remove("book-refresh"); void bookWrap.offsetWidth; bookWrap.classList.add("book-refresh");
  $("#bookMedia").querySelectorAll("figure").forEach(fig=>{
    const open = ()=>{const im=fig.querySelector("img");if(im && im.complete && im.naturalWidth){bookLightbox.querySelector("img").src=im.src;bookLightbox.querySelector("img").alt=im.alt;bookLightbox.classList.add("open");}};
    fig.addEventListener("click",open);fig.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});
  });
  if(shouldScroll) bookWrap.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
}
entryButtons.forEach((button,i)=>button.addEventListener("click",()=>{
  if(activeExperience===i && !bookWrap.hidden){bookWrap.hidden=true;activeExperience=-1;entryButtons.forEach(b=>b.setAttribute("aria-expanded","false"));return;}
  renderExperience(i,true);
}));
$("#bookPrev").addEventListener("click",()=>{if(activeExperience>0)renderExperience(activeExperience-1);});
$("#bookNext").addEventListener("click",()=>{if(activeExperience<experienceEntries.length-1)renderExperience(activeExperience+1);});
$("#bookClose").addEventListener("click",()=>{bookWrap.hidden=true;activeExperience=-1;entryButtons.forEach(b=>b.setAttribute("aria-expanded","false"));});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeBookLightbox();if(!bookWrap.hidden){bookWrap.hidden=true;activeExperience=-1;entryButtons.forEach(b=>b.setAttribute("aria-expanded","false"));}}});

document.querySelectorAll(".reveal, .line").forEach(el => rv.observe(el));

/* Archive carousel: overlapping stack of wide cards, draggable, arrow/keyboard driven */
const arcAll = [...projects];
// Lightbox gallery: a project's own images, or its thumbnail when it has no extra maps.
const arcImgs = p => (p.images && p.images.length) ? p.images : (p.thumb ? [p.thumb] : []);
let cur = 0;
const stage = $("#stage");
stage.innerHTML = arcAll.map((p, i) => {
  const im = p.thumb || (p.images || [])[0];
  const fit = !p.thumb && im && (im.src.includes("images/archive/") || /\.png$/.test(im.src));
  return `<div class="card${fit ? " contain" : ""}" data-i="${i}">${im ? img(im.src, im.cap) : ""}<b>${esc(p.title)}</b></div>`;
}).join("");
const cards = [...stage.children];
function layout() {
  const w = stage.clientWidth < 600 ? 120 : 300;
  cards.forEach((c, i) => {
    const d = i - cur, a = Math.abs(d);
    c.style.transform = `translateX(${d * w}px) translateZ(${-a * 90}px) rotateY(${d * -16}deg) scale(${1 - a * .06})`;
    c.style.opacity = a > 3 ? 0 : 1 - a * .18;
    c.style.zIndex = 10 - a; c.style.pointerEvents = a > 3 ? "none" : "auto";
  });
  const p = arcAll[cur], n = arcImgs(p).length;
  const meta = [p.type, ...(p.tags || [])].map(esc).join(" · ");
  const links = (p.links || []).map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("");
  const gal = n > 1 ? `<button type="button" class="gal-btn">View all ${n} maps</button>` : "";
  $("#stageInfo").innerHTML = `<h3>${esc(p.title)}</h3><div class="meta-line">${meta}</div><p>${esc(p.description)}</p>${links}${gal}`;
}
const go = n => { const was = cur; cur = Math.max(0, Math.min(arcAll.length - 1, n)); layout(); if (cur !== was) swap($("#stageInfo")); };
$("#prev").onclick = () => go(cur - 1); $("#next").onclick = () => go(cur + 1);
cards.forEach(c => c.addEventListener("click", () => {
  const i = +c.dataset.i;
  if (i === cur && arcImgs(arcAll[i]).length) arcOpen(i, 0, c); else go(i);
}));
$("#stageInfo").addEventListener("click", e => { if (e.target.closest(".gal-btn")) arcOpen(cur, 0, e.target.closest(".gal-btn")); });
let sx = null;
stage.addEventListener("pointerdown", e => sx = e.clientX);
addEventListener("pointerup", e => { if (sx !== null && Math.abs(e.clientX - sx) > 40) go(cur + (e.clientX < sx ? 1 : -1)); sx = null; });
addEventListener("keydown", e => { if (arcLb.classList.contains("on")) return; const r = stage.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) { if (e.key === "ArrowRight") go(cur + 1); if (e.key === "ArrowLeft") go(cur - 1); } });

/* lightbox for a project's images */
const arcLb = document.createElement("div");
arcLb.className = "arc-lb"; arcLb.setAttribute("role", "dialog"); arcLb.setAttribute("aria-modal", "true"); arcLb.setAttribute("aria-label", "Project image viewer");
arcLb.innerHTML = `<button class="lb-x" type="button" aria-label="Close">×</button><button class="lb-nav lb-prev" type="button" aria-label="Previous image">←</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-nav lb-next" type="button" aria-label="Next image">→</button>`;
document.body.appendChild(arcLb);
let arcP = 0, arcK = 0, arcFrom = null;
function arcShow() {
  const m = arcImgs(arcAll[arcP])[arcK], n = arcImgs(arcAll[arcP]).length;
  arcLb.querySelector("img").src = m.src; arcLb.querySelector("img").alt = m.cap;
  arcLb.querySelector("figcaption").textContent = `${arcAll[arcP].title} — ${m.cap}` + (n > 1 ? `  (${arcK + 1}/${n})` : "");
  arcLb.querySelector(".lb-prev").hidden = arcLb.querySelector(".lb-next").hidden = n < 2;
}
function arcOpen(p, k, from) { arcP = p; arcK = k; arcFrom = from; arcShow(); arcLb.classList.add("on"); document.body.style.overflow = "hidden"; arcLb.querySelector(".lb-x").focus(); }
function arcClose() { arcLb.classList.remove("on"); document.body.style.overflow = ""; if (arcFrom) arcFrom.focus(); }
const arcStep = d => { const n = arcImgs(arcAll[arcP]).length; arcK = (arcK + d + n) % n; arcShow(); };
arcLb.addEventListener("click", e => { if (e.target.closest(".lb-prev")) arcStep(-1); else if (e.target.closest(".lb-next")) arcStep(1); else if (!e.target.closest("figure img")) arcClose(); });
addEventListener("keydown", e => { if (!arcLb.classList.contains("on")) return; if (e.key === "Escape") arcClose(); if (e.key === "ArrowRight" && arcImgs(arcAll[arcP]).length > 1) arcStep(1); if (e.key === "ArrowLeft" && arcImgs(arcAll[arcP]).length > 1) arcStep(-1); });
addEventListener("resize", layout); layout();

/* Major projects: rotating ring (mouse + touch via pointer events) */
if ($("#ring")) { // legacy ring: only runs if its markup exists (it was removed from the new page)
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
}


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

