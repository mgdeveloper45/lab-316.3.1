// ============ DOM Manipulation (Part One) ============

// Part 1: Getting Started

const mainEl = document.getElementsByTagName("main");
mainEl[0].style.backgroundColor = "var(--main-bg)";

const h1Main = document.createElement("h1");
h1Main.textContent = `DOM Manipulation`;
mainEl[0].appendChild(h1Main);

mainEl[0].classList.add("flex-ctr");

// Part 2: Creating a Menu Bar

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3: Adding Menu Buttons

const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

menuLinks.forEach((ele) => {
  const navEl = document.createElement("a");
  navEl.setAttribute("href", ele.href);
  navEl.textContent = ele.text;
  topMenuEl.appendChild(navEl);
});

// ============ DOM Manipulation (Part Two) ============

// Part 2: Adding Additional HTML and CSS

const subMenuEl = document.getElementById("sub-menu");
// console.log(subMenuEl)
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";

// Part 4: Adding Menu Interaction  /  Part 5: Adding Submenu interaction

const topMenuLinks = topMenuEl.querySelectorAll("#top-menu a");
// console.log(topMenuLinks)
topMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  const links = evt.target;
  if (links.tagName !== "A") return;

  topMenuLinks.forEach((a) => a.classList.remove("active"));
  links.classList.add("active");

  const subMenuLinks = menuLinks.find((a) => a.text === links.textContent);

  if (subMenuLinks.subLinks) subMenuEl.style.top = "100%";
  else subMenuEl.style.top = "0";
  console.log(subMenuEl.textContent);
});
