// 確保在頁面加載時隱藏 modal
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Modal functionality for image enlargement
function openModal(img, title, description) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    if (modal && modalImg && captionText) {
        modal.style.display = "flex";
        modalImg.src = img.src;
        captionText.innerHTML = `<h5>${title}</h5><p>${description}</p>`;
    }
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}
