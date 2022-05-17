var gallery = document.querySelector('.gallery');
var galleryImage = document.querySelector('.gallery-container img');
var closeGallery = document.querySelector('.gallery-close i');
var nextGallery = document.querySelector('.gallery-next');
var prevGallery = document.querySelector('.gallery-prev');
var images = document.querySelectorAll('.app .img img');
var currentIndex = 0

var showGallery = function() {
    galleryImage.src = images[currentIndex].src;
    gallery.classList.add('show');
}

images.forEach((currentImage, index) => {
    currentImage.onclick = () => {
        currentIndex = index;
        showGallery();
    }   
})

closeGallery.onclick = () => {
    gallery.classList.remove('show');
}

nextGallery.onclick = () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    } else {
        currentIndex = 0;
        showGallery();
    }
}

prevGallery.onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    } else {
        currentIndex = images.length - 1;
        showGallery();
    }
}