// Set logo
const siteLogo = document.getElementById('site-logo');
if (siteLogo) siteLogo.src = "/fotos/Atarazana/Logo_Atarazana.png";

// Set intro-2 image
const intro2 = document.getElementById('intro-2-img');
if (intro2) intro2.src = "/fotos/Atarazana/table1.jpg";

// Set video background
const videoBg = document.getElementById('video-bg');
if (videoBg) videoBg.style.backgroundImage = `url('/fotos/Atarazana/plate1.jpg')`;

// Set signature background and image
const sigBg = document.getElementById('sig-bg');
if (sigBg) sigBg.style.backgroundImage = `url('/fotos/Atarazana/2025/table1.jpg')`;
const sigImg = document.getElementById('sig-img');
if (sigImg) sigImg.src = "/fotos/Atarazana/2025/table1.jpg";

// Set about intro image
const aboutIntroImg = document.getElementById('about-intro-img');
if (aboutIntroImg) aboutIntroImg.src = "/fotos/Atarazana/interiorprimer.jpg";

// Set about background
const aboutBg = document.getElementById('about-bg');
if (aboutBg) {
    aboutBg.setAttribute('data-image-src', "/fotos/Atarazana/vistadesde.jpg");
    aboutBg.style.backgroundImage = `url('/fotos/Atarazana/vistadesde.jpg')`;
}

// Set home background
const homeBg = document.getElementById('home-bg');
if (homeBg) {
    homeBg.setAttribute('data-image-src', "/fotos/Atarazana/table3.jpg");
    homeBg.style.backgroundImage = `url('/fotos/Atarazana/table3.jpg')`;
}

// Set reservations background (for sections with id)
const reservationsBg = document.getElementById('reservations-bg');
if (reservationsBg) {
    reservationsBg.setAttribute('data-image-src', "/fotos/Atarazana/table4.jpg");
    reservationsBg.style.backgroundImage = `url('/fotos/Atarazana/table4.jpg')`;
}

// Set reservations background (for sections with class and data-image-src)
const reservationsSections = document.querySelectorAll('.parallax_background.parallax-window[data-image-src*="reservations"]');
reservationsSections.forEach(bg => {
    bg.setAttribute('data-image-src', "/fotos/Atarazana/table4.jpg");
    bg.style.backgroundImage = `url('/fotos/Atarazana/table4.jpg')`;
});

// Export event images for use in the events (blog) page
export const eventImages = {
    bodas: [
        "/fotos/Atarazana/2018/boda1.jpg",
        "/fotos/Atarazana/2018/boda2.JPG",
        "/fotos/Atarazana/2018/boda4.JPG",
        "/fotos/Atarazana/2018/boda3.JPG"
    ],
    // Add more event types here as needed
}; 