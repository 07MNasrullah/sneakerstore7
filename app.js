const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      { code: "black", img: "./img/air.png" },
      { code: "darkblue", img: "./img/air2.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      { code: "lightgray", img: "./img/jordan.png" },
      { code: "green", img: "./img/jordan2.png" },
    ],
    sizes: ["M", "L"],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      { code: "lightgray", img: "./img/blazer.png" },
      { code: "green", img: "./img/blazer2.png" },
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      { code: "black", img: "./img/crater.png" },
      { code: "lightgray", img: "./img/crater2.png" },
    ],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      { code: "gray", img: "./img/hippie.png" },
      { code: "black", img: "./img/hippie2.png" },
    ],
    sizes: ["S", "M"],
  },
  {
    id: 6,
    title: "Slides",
    price: 99,
    colors: [
      { code: "gray", img: "./img/NIKESLIDES.jpeg" },
    ],
    sizes: ["S", "M"],
  }
];


let chosenProduct = products[0];
let currentIndex = 0;

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const colorsContainer = document.querySelector(".colors");
const sizesContainer = document.querySelector(".sizes");

// Render size options
function renderSizes(sizes) {
  sizesContainer.innerHTML = "";
  sizes.forEach(size => {
    const sizeEl = document.createElement("div");
    sizeEl.className = "size";
    sizeEl.textContent = size;
    sizesContainer.appendChild(sizeEl);

    sizeEl.addEventListener("click", () => {
      document.querySelectorAll(".size").forEach(s => {
        s.style.backgroundColor = "white";
        s.style.color = "black";
      });
      sizeEl.style.backgroundColor = "black";
      sizeEl.style.color = "white";
    });
  });
}

// Render color options
function renderColors(colors) {
  colorsContainer.innerHTML = "";
  colors.forEach((colorObj, index) => {
    const colorEl = document.createElement("div");
    colorEl.className = "color";
    colorEl.style.backgroundColor = colorObj.code;
    colorsContainer.appendChild(colorEl);

    colorEl.addEventListener("click", () => {
      currentProductImg.src = chosenProduct.colors[index].img;
    });
  });
}

// Update product UI
function updateProduct(product) {
  chosenProduct = product;
  currentProductTitle.textContent = product.title;
  currentProductPrice.textContent = "RM" + product.price;
  currentProductImg.src = product.colors[0].img;

  renderColors(product.colors);
  renderSizes(product.sizes);
}

// Menu click events
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    updateProduct(products[index]);
  });
});

// Init with first product
updateProduct(chosenProduct);

// Payment button logic
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton?.addEventListener("click", () => {
  payment.style.display = "flex";
});

close?.addEventListener("click", () => {
  payment.style.display = "none";
});

// Next button logic (optional)
const nextBtn = document.getElementById("nextBtn");
nextBtn?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % products.length;
  wrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;
  updateProduct(products[currentIndex]);
});

// Optional animation
wrapper.style.transition = "transform 0.5s ease";
