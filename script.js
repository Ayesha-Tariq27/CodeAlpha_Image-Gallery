// Lightbox functionality
const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Lightbox
galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showLightbox();
  });
});

function showLightbox() {
  lightbox.style.display = "flex";
  lightboxImg.src = galleryItems[currentIndex].src;
}

// Close Lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Next / Prev buttons
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showLightbox();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showLightbox();
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Filtering
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    items.forEach(item => {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
        item.style.opacity = 1;
      } else {
        item.style.display = "none";
      }
    });
  });
});
