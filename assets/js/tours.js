/* Tour content and interactions for the Siam Drift portfolio demo. */
const tours = [
  {
    id: "quiet-khlongs", name: "The Quiet Khlongs", type: "canal", typeLabel: "Quiet canals",
    duration: 2, durationLabel: "2 hours", price: 1800, guests: "Up to 4 guests",
    tagline: "A slower look at everyday Bangkok.",
    description: "Leave the busy streets behind and follow green canals, wooden homes, and small neighbourhood scenes that make the city feel wonderfully human.",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Bangkok canal and riverside architecture",
    highlights: ["Quiet neighbourhood waterways", "Local life along the canals", "Flexible pace with your captain"],
    itinerary: [{time:"00:00", title:"Meet by the water", text:"Settle in and get to know your route."},{time:"00:20",title:"Into the khlongs",text:"Glide past canal-side homes and leafy stretches."},{time:"01:20",title:"A slower return",text:"Enjoy the scenery on the way back."}]
  },
  {
    id: "temple-trails", name: "Temples & River Tales", type: "culture", typeLabel: "Culture & temples",
    duration: 3, durationLabel: "3 hours", price: 2400, guests: "Up to 4 guests",
    tagline: "Waterways, heritage, and stories.",
    description: "A culture-focused route connecting Bangkok's waterside character with its remarkable temple architecture and layered history.",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Ornate Thai temple architecture",
    highlights: ["Scenic river approach", "Temple-area viewpoints", "Time for photos and questions"],
    itinerary: [{time:"00:00",title:"Start on the river",text:"Meet your captain and begin the journey."},{time:"00:45",title:"Heritage views",text:"See iconic architecture from the water."},{time:"02:00",title:"Canal-side discoveries",text:"Explore quieter stretches before returning."}]
  },
  {
    id: "golden-hour", name: "Golden Hour Drift", type: "sunset", typeLabel: "Golden hour",
    duration: 2, durationLabel: "2 hours", price: 2100, guests: "Up to 4 guests",
    tagline: "Warm light. Open water. No rush.",
    description: "An easygoing late-afternoon cruise designed around soft light, riverside silhouettes, and a little breathing room at the end of the day.",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Longtail boat on tropical water in warm light",
    highlights: ["Late-afternoon departure", "Photo-friendly viewpoints", "A relaxed pace for couples or friends"],
    itinerary: [{time:"00:00",title:"Board and settle in",text:"Ease into the late-afternoon atmosphere."},{time:"00:30",title:"Follow the light",text:"Cruise through scenic stretches of water."},{time:"01:30",title:"Return at dusk",text:"Take in the changing colours of the city."}]
  },
  {
    id: "canal-life", name: "Canal Life & Local Corners", type: "canal", typeLabel: "Quiet canals",
    duration: 3, durationLabel: "3 hours", price: 2600, guests: "Up to 6 guests",
    tagline: "A little more time to look around.",
    description: "A longer route for curious travellers who want to linger over canal-side details, see local neighbourhoods, and leave room for an optional stop.",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Traditional boats and homes beside a Southeast Asian canal",
    highlights: ["Longer time on the water", "Optional stop subject to local access", "Suitable for small groups"],
    itinerary: [{time:"00:00",title:"Meet your captain",text:"Review your preferred route and interests."},{time:"00:35",title:"Explore the waterways",text:"Take the scenic route through canal neighbourhoods."},{time:"02:00",title:"Pause and notice",text:"Allow time for a photo stop if appropriate."}]
  },
  {
    id: "river-to-khlong", name: "River to Khlong", type: "culture", typeLabel: "Culture & temples",
    duration: 2, durationLabel: "2 hours", price: 1900, guests: "Up to 4 guests",
    tagline: "From the big river to hidden lanes.",
    description: "See how the broad Chao Phraya and narrower canals connect, with a mix of city landmarks and intimate waterside scenes.",
    image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Bangkok river and city skyline",
    highlights: ["Changing city perspectives", "Landmark views from the water", "A mix of river and canal scenery"],
    itinerary: [{time:"00:00",title:"Depart the riverside",text:"Start with wide-open river views."},{time:"00:35",title:"Turn into the canals",text:"Experience the contrast of smaller waterways."},{time:"01:30",title:"Head back",text:"Return with a fresh perspective on the city."}]
  },
  {
    id: "private-custom", name: "Your Own Bangkok", type: "sunset", typeLabel: "Make it your own",
    duration: 4, durationLabel: "4 hours", price: 3400, guests: "Up to 6 guests",
    tagline: "A longer, more personal day afloat.",
    description: "A flexible sample itinerary for travellers who want extra time and a route shaped around their interests. Real customisation would depend on the operator.",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Bangkok cityscape and traditional architecture",
    highlights: ["Longer sample itinerary", "Choose your preferred theme", "More room for unhurried stops"],
    itinerary: [{time:"00:00",title:"Plan together",text:"Choose a theme and discuss your interests."},{time:"01:00",title:"Take the longer route",text:"Spend more time in the areas you enjoy."},{time:"03:00",title:"One last scenic stretch",text:"Finish at a comfortable pace."}]
  }
];

function formatBaht(value) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value) + " ฿";
}
function tourCard(tour, index = 0) {
  return `<article class="tour-card" style="--card-index:${index}">
    <a class="tour-card-image" href="tour.html?id=${encodeURIComponent(tour.id)}" aria-label="View ${tour.name}">
      <img src="${tour.image}" alt="${tour.imageAlt}" loading="lazy">
      <span class="tour-category">${tour.typeLabel}</span><span class="card-arrow" aria-hidden="true">↗</span>
    </a>
    <div class="tour-card-body"><div class="tour-meta"><span>${tour.durationLabel}</span><span class="meta-dot">·</span><span>${tour.guests}</span></div>
      <h3><a href="tour.html?id=${encodeURIComponent(tour.id)}">${tour.name}</a></h3><p>${tour.tagline}</p>
      <div class="tour-card-bottom"><div><small>Private group from</small><strong>${formatBaht(tour.price)}</strong></div><a class="text-link" href="tour.html?id=${encodeURIComponent(tour.id)}">Discover <span>↗</span></a></div>
    </div></article>`;
}
function renderTourGrid(target, list) {
  if (!target) return;
  target.innerHTML = list.map((tour, i) => tourCard(tour, i)).join("");
}
function renderTourDetail() {
  const root = document.querySelector("#tour-detail");
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const tour = tours.find(item => item.id === params.get("id")) || tours[0];
  document.title = `${tour.name} — Siam Drift`;
  root.innerHTML = `
    <section class="detail-hero"><img src="${tour.image}" alt="${tour.imageAlt}"><div class="detail-hero-overlay"></div><div class="container detail-hero-content"><a class="back-link" href="tours.html">← All experiences</a><p class="eyebrow eyebrow-light"><span class="eyebrow-line"></span>${tour.typeLabel}</p><h1>${tour.name.replace(" & ", " &<br>")}</h1><p>${tour.tagline}</p></div></section>
    <section class="section section-paper"><div class="container detail-layout"><div class="detail-main"><div class="detail-facts"><span>◷ ${tour.durationLabel}</span><span>♧ ${tour.guests}</span><span>↗ Private experience</span></div><p class="lead-copy">${tour.description}</p><h2>The feeling of the <em>journey.</em></h2><div class="highlight-list">${tour.highlights.map(x=>`<div><span>↗</span>${x}</div>`).join("")}</div><h2>A little look at the <em>route.</em></h2><div class="itinerary">${tour.itinerary.map(step=>`<div class="itinerary-step"><span class="itinerary-time">${step.time}</span><div><h3>${step.title}</h3><p>${step.text}</p></div></div>`).join("")}</div><p class="demo-note">This itinerary is illustrative. A real operator would confirm the route, stops, timing, and access.</p></div>
    <aside class="detail-booking-card"><p class="eyebrow">Your private trip</p><div class="detail-price">${formatBaht(tour.price)} <small>/ group</small></div><p>Illustrative starting price for up to the listed group size.</p><div class="summary-line"><span>Duration</span><strong>${tour.durationLabel}</strong></div><div class="summary-line"><span>Group size</span><strong>${tour.guests}</strong></div><a class="button button-dark button-wide" href="booking.html?tour=${encodeURIComponent(tour.id)}">Plan this trip <span>↗</span></a><small>No payment or real reservation is taken in this demo.</small></aside></div></div></section>
    <section class="section section-cream"><div class="container"><div class="section-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span> Keep exploring</p><h2>More ways to <em>drift.</em></h2></div><a class="text-link" href="tours.html">All experiences ↗</a></div><div class="tour-grid featured-grid">${tours.filter(t=>t.id!==tour.id).slice(0,3).map(t=>tourCard(t)).join("")}</div></div></section>`;
}
function initTourListing() {
  const grid = document.querySelector("#all-tours");
  if (!grid) return;
  const search = document.querySelector("#tour-search");
  const type = document.querySelector("#tour-type");
  const duration = document.querySelector("#tour-duration");
  const count = document.querySelector("#result-count");
  const empty = document.querySelector("#empty-state");
  const apply = () => {
    const query = search.value.trim().toLowerCase();
    const list = tours.filter(t => {
      const matchesQuery = `${t.name} ${t.tagline} ${t.description} ${t.typeLabel}`.toLowerCase().includes(query);
      const matchesType = type.value === "all" || t.type === type.value;
      const matchesDuration = duration.value === "all" || (duration.value === "short" ? t.duration <= 2 : t.duration > 2);
      return matchesQuery && matchesType && matchesDuration;
    });
    renderTourGrid(grid, list);
    count.textContent = `${list.length} ${list.length === 1 ? "experience" : "experiences"}`;
    empty.hidden = list.length !== 0;
    grid.hidden = list.length === 0;
  };
  [search, type, duration].forEach(el => el.addEventListener("input", apply));
  document.querySelector("#clear-filters")?.addEventListener("click", () => {
    search.value = ""; type.value = "all"; duration.value = "all"; apply();
  });
  const params = new URLSearchParams(window.location.search);
  if (["canal","culture","sunset"].includes(params.get("type"))) type.value = params.get("type");
  apply();
}
document.addEventListener("DOMContentLoaded", () => {
  renderTourGrid(document.querySelector("#featured-tours"), tours.slice(0,3));
  initTourListing();
  renderTourDetail();
});

window.tours = tours;
