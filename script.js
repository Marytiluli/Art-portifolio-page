// Opens the lightbox and displays the clicked image
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = element.src;
    lightbox.classList.add('visible');
}

// Closes the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('visible');
}

// Filters the gallery based on selected category
function filterGallery(category) {
    const artworks = document.querySelectorAll('.art');

    // Loops through each artwork element
    artworks.forEach(art => {
        if (category === 'all' || art.classList.contains(category)) {
            art.style.display = 'block';
        } 
}