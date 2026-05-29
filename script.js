const menuData = {
  te: {
    categories: [
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
    ],
    popularItems: [
      { name: "మసాల దోశా", price: "₹50" },
      { name: "పూరీ", price: "₹50" },
      { name: "ఫుల్ మీల్స్", price: "₹100" }
    ]
  },
  en: {
    categories: [
      {
        id: "idli",
        name: "Idlis",
        items: [
          { name: "Idli (2 pieces)", price: "₹30", search: "idli idly ఇడ్లీ" }
        ]
      },
      {
        id: "vada",
        name: "Vadas",
        items: [
          { name: "Vada (1 piece)", price: "₹20", search: "vada wada వడ" }
        ]
      },
      {
        id: "puri",
        name: "Puri",
        items: [
          { name: "Puri", price: "₹50", search: "puri poori పూరీ" }
        ]
      },
      {
        id: "tiffin",
        name: "Other Tiffins",
        items: [
          { name: "Chapati", price: "₹60", search: "chapati roti చపాతీ" }
        ]
      },
      {
        id: "dosa",
        name: "Dosas",
        items: [
          { name: "Masala Dosa", price: "₹50", search: "masala dosa dose dosha మసాల దోశా" },
          { name: "Set Dosa", price: "₹50", search: "set dosa dose dosha సెట్ దోశా" },
          { name: "Onion Dosa", price: "₹60", search: "onion dosa dose dosha అనియన్ దోశా" }
        ]
      },
      {
        id: "upma",
        name: "Upma",
        items: [
          { name: "Upma", price: "₹50", search: "upma uppuma ఉప్మా" },
          { name: "Uttapam", price: "₹60", search: "uttapam uthappam ఉత్తప్పం" }
        ]
      },
      {
        id: "meals",
        name: "Meals",
        items: [
          { name: "Pulav", price: "₹50", search: "pulav pulao palav పలావ్" },
          { name: "Lemon Rice", price: "₹50", search: "lemon rice లెమన్ రైస్" },
          { name: "Bisibele Bath", price: "₹50", search: "bisibele bath bisi bele bath బిసిబెలె బాత్" },
          { name: "Sambar", price: "₹50", search: "sambar sambhar సాంబార్" },
          { name: "Chow Chow Bath", price: "₹50", search: "chow chow bath chowchow bath చౌ చౌ బాత్" },
          { name: "Full Meals", price: "₹100", search: "full meals meal ఫుల్ మీల్స్" },
          { name: "Plate Meals", price: "₹70", search: "plate meals meal ప్లేట్ మీల్స్" },
          { name: "Curd Rice", price: "₹50", search: "curd rice perugannam పెరుగన్నం" },
          { name: "Fried Rice", price: "₹60", search: "fried rice ఫ్రైడ్ రైస్" },
          { name: "Gobi Rice", price: "₹70", search: "gobi rice gobi గోబీ రైస్" },
          { name: "Jeera Rice", price: "₹60", search: "jeera rice jira rice జీరా రైస్" },
          { name: "Tomato Rice", price: "₹60", search: "tomato rice టమాటో రైస్" },
          { name: "Vegetable Rice", price: "₹60", search: "vegetable rice veg rice వెజిటేబుల్ రైస్" }
        ]
      },
      {
        id: "drinks",
        name: "Tea / Coffee",
        items: [
          { name: "Coffee", price: "₹10", search: "coffee కాఫీ" },
          { name: "Tea", price: "₹10", search: "tea chai టీ" }
        ]
      }
    ],
    popularItems: [
      { name: "Masala Dosa", price: "₹50" },
      { name: "Puri", price: "₹50" },
      { name: "Full Meals", price: "₹100" }
    ]
  }
};

const translations = {
  te: {
    htmlLang: "te",
    title: "హోటల్ వైశాలి | మెనూ",
    brandMark: "వై",
    topbar: "స్వాగతం",
    heroKicker: "శుచి • రుచి • నాణ్యత",
    heroTitle: "హోటల్ వైశాలి",
    tagline: "రుచికరమైన ఆహారం • సరసమైన ధరలు",
    menuLink: "మెనూ చూడండి",
    menuEyebrow: "ఈ రోజు మెనూ",
    menuHeading: "మీకు నచ్చిన రుచి ఎంచుకోండి",
    searchPlaceholder: "వంటకం వెతకండి",
    filtersLabel: "వర్గాలు",
    featuredEyebrow: "మా ప్రత్యేకత",
    featuredTitle: "ప్రత్యేక వంటకాలు",
    popular: "ప్రజాదరణ",
    allMenuEyebrow: "తాజాగా వడ్డించబడును",
    allMenuTitle: "పూర్తి మెనూ",
    allFilter: "అన్నీ",
    visibleItems: "కనిపిస్తున్న వంటకాలు",
    allItems: "అందుబాటులో ఉన్న అన్ని వంటకాలు",
    emptyMessage: "ఈ పేరుతో వంటకం కనిపించలేదు",
    clearSearch: "అన్నీ చూపించండి",
    footerLineOne: "శుచి మరియు రుచి మా ప్రత్యేకత",
    footerLineTwo: "మీ రాకకు ధన్యవాదాలు"
  },
  en: {
    htmlLang: "en",
    title: "Hotel Vaishali | Menu",
    brandMark: "HV",
    topbar: "Welcome",
    heroKicker: "Clean • Tasty • Quality",
    heroTitle: "Hotel Vaishali",
    tagline: "Delicious Food • Affordable Prices",
    menuLink: "View Menu",
    menuEyebrow: "Today's Menu",
    menuHeading: "Choose Your Favorite Taste",
    searchPlaceholder: "Search dishes",
    filtersLabel: "Categories",
    featuredEyebrow: "Our Specials",
    featuredTitle: "Special Dishes",
    popular: "Popular",
    allMenuEyebrow: "Served Fresh",
    allMenuTitle: "Full Menu",
    allFilter: "All",
    visibleItems: "Showing dishes",
    allItems: "All available dishes",
    emptyMessage: "No dish found with this name",
    clearSearch: "Show all",
    footerLineOne: "Cleanliness and taste are our specialty",
    footerLineTwo: "Thank you for visiting"
  }
};

const filters = document.querySelector("#filters");
const menuSections = document.querySelector("#menuSections");
const featuredGrid = document.querySelector("#featuredGrid");
const featuredSection = document.querySelector("#featuredSection");
const searchInput = document.querySelector("#searchInput");
const resultsText = document.querySelector("#resultsText");
const emptyState = document.querySelector("#emptyState");
const clearSearch = document.querySelector("#clearSearch");
const languageOptions = document.querySelector(".language-options");

let activeCategory = "all";
let activeLanguage = "te";

function toTeluguNumber(value) {
  const digits = "౦౧౨౩౪౫౬౭౮౯";
  return String(value).replace(/[0-9]/g, (digit) => digits[Number(digit)]);
}

function formatCount(value) {
  return activeLanguage === "te" ? toTeluguNumber(value) : value;
}

function getCopy() {
  return translations[activeLanguage];
}

function getCategories() {
  return menuData[activeLanguage].categories;
}

function createFilters() {
  const copy = getCopy();
  const options = [{ id: "all", name: copy.allFilter }, ...getCategories().map(({ id, name }) => ({ id, name }))];

  filters.setAttribute("aria-label", copy.filtersLabel);
  filters.innerHTML = options.map(({ id, name }) => `
    <button class="filter-button ${id === activeCategory ? "active" : ""}" type="button" data-category="${id}">
      ${name}
    </button>
  `).join("");
}

function createFeaturedCards() {
  const copy = getCopy();

  featuredGrid.innerHTML = menuData[activeLanguage].popularItems.map((item) => `
    <article class="feature-card">
      <div>
        <p>${copy.popular}</p>
        <h3>${item.name}</h3>
      </div>
      <span class="price">${item.price}</span>
    </article>
  `).join("");
}

function currentMatches() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const shownCategories = activeCategory === "all"
    ? getCategories()
    : getCategories().filter((category) => category.id === activeCategory);

  return shownCategories.map((category) => ({
    ...category,
    items: category.items.filter((item) => {
      const searchableText = `${item.name} ${item.search || ""}`.toLocaleLowerCase();
      return searchableText.includes(query);
    })
  })).filter((category) => category.items.length);
}

function renderStaticText() {
  const copy = getCopy();
  const textTargets = {
    ".topbar-label": copy.topbar,
    "#brandMark": copy.brandMark,
    "#heroKicker": copy.heroKicker,
    "#heroTitle": copy.heroTitle,
    "#tagline": copy.tagline,
    "#menuLink": copy.menuLink,
    "#menuEyebrow": copy.menuEyebrow,
    "#menuHeading": copy.menuHeading,
    "#featuredEyebrow": copy.featuredEyebrow,
    "#featuredTitle": copy.featuredTitle,
    "#allMenuEyebrow": copy.allMenuEyebrow,
    "#allMenuTitle": copy.allMenuTitle,
    "#emptyMessage": copy.emptyMessage,
    "#clearSearch": copy.clearSearch,
    "#footerTitle": copy.heroTitle,
    "#footerLineOne": copy.footerLineOne,
    "#footerLineTwo": copy.footerLineTwo
  };

  document.documentElement.lang = copy.htmlLang;
  document.title = copy.title;
  searchInput.placeholder = copy.searchPlaceholder;
  searchInput.setAttribute("aria-label", copy.searchPlaceholder);

  Object.entries(textTargets).forEach(([selector, text]) => {
    const element = document.querySelector(selector);

    if (element) {
      element.textContent = text;
    }
  });
}

function renderMenu() {
  const copy = getCopy();
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
    ? `${copy.visibleItems}: ${formatCount(totalItems)}`
    : copy.allItems;

  emptyState.hidden = totalItems !== 0;
  menuSections.hidden = totalItems === 0;
  featuredSection.hidden = Boolean(query) || activeCategory !== "all";
}

function renderPage() {
  renderStaticText();
  createFilters();
  createFeaturedCards();
  renderMenu();
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

languageOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-language]");

  if (!button) {
    return;
  }

  activeLanguage = button.dataset.language;
  activeCategory = "all";
  searchInput.value = "";

  document.querySelectorAll("[data-language]").forEach((option) => {
    option.classList.toggle("active", option.dataset.language === activeLanguage);
  });

  renderPage();
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth", block: "start" });
});

searchInput.addEventListener("input", renderMenu);

clearSearch.addEventListener("click", () => {
  activeCategory = "all";
  searchInput.value = "";
  createFilters();
  renderMenu();
  searchInput.focus();
});

renderPage();
