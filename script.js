let images = document.querySelectorAll('.gallery-img');
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

function openLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
  currentIndex = Array.from(images).findIndex(img => img.src === src);
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function filterImages(category) {
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
