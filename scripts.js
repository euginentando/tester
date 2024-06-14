
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); 
}


document.getElementById('whatsappButton').addEventListener('click', () => {
    window.location.href = 'https://whatsapp.com/channel/0029VaiE7izGOj9mGKZn0H2V';
});

document.getElementById('facebookButton').addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/profile.php?id=100063768595908';
});

function openFullscreen(img) {
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');
    
    fullscreenImage.src = img.src;
    overlay.style.display = 'flex';
  }
  
  function closeFullscreen() {
    const overlay = document.getElementById('fullscreenOverlay');
    overlay.style.display = 'none';
  }
  