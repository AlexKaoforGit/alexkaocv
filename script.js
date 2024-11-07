// 確保在頁面加載時隱藏 modal
document.addEventListener("DOMContentLoaded", function() {
    AOS.init();

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

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Close menu when clicking outside of it
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    
    // Check if the click is outside the nav or the hamburger button
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('active'); // Close the menu
    }
});

console.clear();

const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

// 設置 Canvas 大小
canvas.width = 1158;
canvas.height = 770;

const frameCount = 147;
const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
);

const images = [];
const airpods = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

// 使用 GSAP 和 ScrollTrigger 控制動畫
gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5
  },
  onUpdate: render // 使用 animation 的 onUpdate 而非 scrollTrigger 的 onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0);
}
