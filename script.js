const images = [
    'download.jpeg',
    'image.jpg',
    'download.jpeg'
    // Add more image paths as needed
];

let currentIndex = 0;

const currentImage = document.getElementById('current-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const thumbnails = document.querySelectorAll('.thumbnail');

function updateImage(index) {
    currentImage.src = images[index];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage(currentIndex);
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateImage(currentIndex);
    });
});
