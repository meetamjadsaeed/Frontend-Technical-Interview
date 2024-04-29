// Get references to DOM elements
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const closeBtn = document.getElementById("close-btn");
const galleryImages = document.querySelectorAll(".lightbox-trigger");

// Open lightbox and display clicked image
function openLightbox(imageSrc) {
  lightbox.style.display = "block";
  lightboxContent.src = imageSrc;
}

// Close lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Attach event listeners
galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    openLightbox(image.src);
  });
});

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", closeLightbox);
lightboxContent.addEventListener("click", function (e) {
  e.stopPropagation();
});
