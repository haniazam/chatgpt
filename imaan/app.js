const pageType = document.body.dataset.source || "upcoming";
const DATA = pageType === "ongoing" ? (window.IMAAN_ONGOING || []) : (window.IMAAN_UPCOMING || []);
const storageKey = "imaanSavedV2";
const savedSet = (() => {
  try { return new Set(JSON.parse(localStorage.getItem(storageKey) || "[]")); }
  catch (error) { return new Set(); }
})();

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);

const tagOverrides = {
  "candle-flowers-les-amis": { "Women-only": "Girls’ craft night" },
  "golden-hour-les-amis": { "Women-only": "Girls’ rooftop social" }
};

function splitTiming(rawTiming) {
  const timing = String(rawTiming || "Check availability").replace(/^📅\s*/, "");
  const parts = timing.split(" · ");
  if (parts.length === 2) return { date: parts[0], time: parts[1] };
  return { date: timing, time: "" };
}

function cardHtml(event) {
  const timing = splitTiming(event.m?.[0]);
  const details = (event.m || []).slice(1);
  const visibleTags = (event.g || [])
    .filter((tag) => !String(tag[0]).toLowerCase().includes("english"))
    .map((tag) => [tagOverrides[event.i]?.[tag[0]] || tag[0], tag[1]]);
  const isSaved = savedSet.has(event.i);
  const label = pageType === "ongoing" ? "Availability" : "Date";

  return `
    <article class="card" data-id="${escapeHtml(event.i)}" data-c="${escapeHtml(event.c)}">
      <div class="visual ${escapeHtml(event.c)}">
        <span class="emoji">${event.e}</span>
        <button class="fav${isSaved ? " on" : ""}" type="button"
          aria-label="Save ${escapeHtml(event.t)}" aria-pressed="${isSaved}">${isSaved ? "♥" : "♡"}</button>
      </div>
      <div class="body">
        <div class="contentDate">
          <div class="dateLeft">
            <span class="dateIcon" aria-hidden="true">${pageType === "ongoing" ? "🗓️" : "📅"}</span>
            <span class="dateCopy"><small>${label}</small><strong>${timing.date}</strong></span>
          </div>
          ${timing.time ? `<span class="dateTime">${timing.time}</span>` : ""}
        </div>
        <div class="tags">${visibleTags.map((tag) => `<span class="tag${tag[1] ? " hot" : ""}">${escapeHtml(tag[0])}</span>`).join("")}</div>
        <h3>${escapeHtml(event.t)}</h3>
        <div class="meta">${details.map((detail) => `<div>${detail}</div>`).join("")}</div>
        <div class="note">${event.n}</div>
        <div class="cardActions">${event.a.map((action) => `<a class="btn ${escapeHtml(action[2])}" target="_blank" rel="noopener" href="${escapeHtml(action[1])}">${escapeHtml(action[0])}</a>`).join("")}</div>
      </div>
    </article>`;
}

const grid = document.querySelector("#grid");
const collection = document.querySelector(".collection");
const filters = [...document.querySelectorAll(".filter")];
const empty = document.querySelector("#empty");
const toast = document.querySelector("#toast");
const count = document.querySelector("[data-count]");
const savedButton = document.querySelector("#saved");
let savedOnly = false;

grid.innerHTML = DATA.map(cardHtml).join("");
const cards = [...document.querySelectorAll(".card")];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 1500);
}

function render() {
  const activeFilter = document.querySelector(".filter.active")?.dataset.f || "all";
  let visible = 0;
  cards.forEach((card) => {
    const matchesCategory = activeFilter === "all" || card.dataset.c === activeFilter;
    const matchesSaved = !savedOnly || savedSet.has(card.dataset.id);
    const shouldShow = matchesCategory && matchesSaved;
    card.style.display = shouldShow ? "grid" : "none";
    if (shouldShow) visible += 1;
  });
  count.textContent = `${visible} idea${visible === 1 ? "" : "s"}`;
  collection.hidden = visible === 0;
  empty.style.display = visible === 0 ? "block" : "none";
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    render();
  });
});

document.querySelectorAll(".fav").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.closest(".card").dataset.id;
    if (savedSet.has(id)) savedSet.delete(id); else savedSet.add(id);
    localStorage.setItem(storageKey, JSON.stringify([...savedSet]));
    const isSaved = savedSet.has(id);
    button.classList.toggle("on", isSaved);
    button.textContent = isSaved ? "♥" : "♡";
    button.setAttribute("aria-pressed", String(isSaved));
    showToast(isSaved ? "Saved" : "Removed");
    render();
  });
});

savedButton.addEventListener("click", () => {
  savedOnly = !savedOnly;
  savedButton.textContent = savedOnly ? "← Show everything" : "♡ Show my favourites";
  render();
});

render();
