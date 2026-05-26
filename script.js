const categories = [
  {
    id: "idli",
    name: "ఇడ్లీలు",
    items: [
      { name: "ఇడ్లీ (2 పీస్)", price: "₹30", search: "idli idly" }
    ]
  },
  {
    id: "vada",
    name: "వడలు",
    items: [
      { name: "వడ (1 పీస్)", price: "₹20", search: "vada wada" }
    ]
  },
  {
    id: "puri",
    name: "పూరీ",
    items: [
      { name: "పూరీ", price: "₹50", search: "puri poori" }
    ]
  },
  {
    id: "tiffin",
    name: "ఇతర అల్పాహారం",
    items: [
      { name: "చపాతీ", price: "₹60", search: "chapati roti" }
    ]
  },
  {
    id: "dosa",
    name: "దోసెలు",
    items: [
      { name: "మసాల దోశా", price: "₹50", search: "masala dosa dose dosha" },
      { name: "సెట్ దోశా", price: "₹50", search: "set dosa dose dosha" },
      { name: "అనియన్ దోశా", price: "₹60", search: "onion dosa dose dosha" }
    ]
  },
  {
    id: "upma",
    name: "ఉప్మా",
    items: [
      { name: "ఉప్మా", price: "₹50", search: "upma uppuma" },
      { name: "ఉత్తప్పం", price: "₹60", search: "uttapam uthappam" }
    ]
  },
  {
    id: "meals",
    name: "భోజనం",
    items: [
      { name: "పలావ్", price: "₹50", search: "pulav pulao palav" },
      { name: "లెమన్ రైస్", price: "₹50", search: "lemon rice" },
      { name: "బిసిబెలె బాత్", price: "₹50", search: "bisibele bath bisi bele bath" },
      { name: "సాంబార్", price: "₹50", search: "sambar sambhar" },
      { name: "చౌ చౌ బాత్", price: "₹50", search: "chow chow bath chowchow bath" },
      { name: "ఫుల్ మీల్స్", price: "₹100", search: "full meals meal" },
      { name: "ప్లేట్ మీల్స్", price: "₹70", search: "plate meals meal" },
      { name: "పెరుగన్నం", price: "₹50", search: "curd rice perugannam" },
      { name: "ఫ్రైడ్ రైస్", price: "₹60", search: "fried rice" },
      { name: "గోబీ రైస్", price: "₹70", search: "gobi rice gobi" },
      { name: "జీరా రైస్", price: "₹60", search: "jeera rice jira rice" },
      { name: "టమాటో రైస్", price: "₹60", search: "tomato rice" },
      { name: "వెజిటేబుల్ రైస్", price: "₹60", search: "vegetable rice veg rice" }
    ]
  },
  {
    id: "drinks",
    name: "టీ / కాఫీ",
    items: [
      { name: "కాఫీ", price: "₹10", search: "coffee" },
      { name: "టీ", price: "₹10", search: "tea chai" }
    ]
  }
];

const popularItems = [
  { name: "మసాల దోశా", price: "₹50" },
  { name: "పూరీ", price: "₹50" },
  { name: "ఫుల్ మీల్స్", price: "₹100" }
];

const filters = document.querySelector("#filters");
const menuSections = document.querySelector("#menuSections");
const featuredGrid = document.querySelector("#featuredGrid");
const featuredSection = document.querySelector("#featuredSection");
const searchInput = document.querySelector("#searchInput");
const resultsText = document.querySelector("#resultsText");
const emptyState = document.querySelector("#emptyState");
const clearSearch = document.querySelector("#clearSearch");

let activeCategory = "all";

function toTeluguNumber(value) {
  const digits = "౦౧౨౩౪౫౬౭౮౯";
  return String(value).replace(/[0-9]/g, (digit) => digits[Number(digit)]);
}

function createFilters() {
  const options = [{ id: "all", name: "అన్నీ" }, ...categories.map(({ id, name }) => ({ id, name }))];

  filters.innerHTML = options.map(({ id, name }) => `
    <button class="filter-button ${id === activeCategory ? "active" : ""}" type="button" data-category="${id}">
      ${name}
    </button>
  `).join("");
}

function createFeaturedCards() {
  featuredGrid.innerHTML = popularItems.map((item) => `
    <article class="feature-card">
      <div>
        <p>ప్రజాదరణ</p>
        <h3>${item.name}</h3>
      </div>
      <span class="price">${item.price}</span>
    </article>
  `).join("");
}

function currentMatches() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const shownCategories = activeCategory === "all"
    ? categories
    : categories.filter((category) => category.id === activeCategory);

  return shownCategories.map((category) => ({
    ...category,
    items: category.items.filter((item) => {
      const searchableText = `${item.name} ${item.search || ""}`.toLocaleLowerCase();
      return searchableText.includes(query);
    })
  })).filter((category) => category.items.length);
}

function renderMenu() {
  const query = searchInput.value.trim();
  const matchingCategories = currentMatches();
  const totalItems = matchingCategories.reduce((total, category) => total + category.items.length, 0);

  menuSections.innerHTML = matchingCategories.map((category) => `
    <article class="menu-category">
      <h3>${category.name}</h3>
      <ul class="menu-list">
        ${category.items.map((item) => `
          <li class="menu-item">
            <span class="item-name">${item.name}</span>
            <span class="item-price">${item.price}</span>
          </li>
        `).join("")}
      </ul>
    </article>
  `).join("");

  resultsText.textContent = query || activeCategory !== "all"
    ? `కనిపిస్తున్న వంటకాలు: ${toTeluguNumber(totalItems)}`
    : "అందుబాటులో ఉన్న అన్ని వంటకాలు";

  emptyState.hidden = totalItems !== 0;
  menuSections.hidden = totalItems === 0;
  featuredSection.hidden = Boolean(query) || activeCategory !== "all";
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");

  if (!button) {
    return;
  }

  activeCategory = button.dataset.category;
  createFilters();
  renderMenu();
});

searchInput.addEventListener("input", renderMenu);

clearSearch.addEventListener("click", () => {
  activeCategory = "all";
  searchInput.value = "";
  createFilters();
  renderMenu();
  searchInput.focus();
});

createFilters();
createFeaturedCards();
renderMenu();
