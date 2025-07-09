// Set logo
const siteLogo = document.getElementById('site-logo');
if (siteLogo) siteLogo.src = "https://jaocruz.nyc3.cdn.digitaloceanspaces.com/Atarazana/Logo_Atarazana.png";

// Set intro-2 image
const intro2 = document.getElementById('intro-2-img');
if (intro2) intro2.src = "https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/table1.jpg";

// Set video background
const videoBg = document.getElementById('video-bg');
if (videoBg) videoBg.style.backgroundImage = `url('https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/plate1.jpg')`;

// Set signature background and image
const sigBg = document.getElementById('sig-bg');
if (sigBg) sigBg.style.backgroundImage = `url('https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/table2.jpg')`;
const sigImg = document.getElementById('sig-img');
if (sigImg) sigImg.src = "https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/table2.jpg";

// Set about intro image
const aboutIntroImg = document.getElementById('about-intro-img');
if (aboutIntroImg) aboutIntroImg.src = "https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/interiorprimer.jpg";

// Set about background
const aboutBg = document.getElementById('about-bg');
if (aboutBg) {
    aboutBg.setAttribute('data-image-src', "https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/vistadesde.jpg");
    aboutBg.style.backgroundImage = `url('https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/vistadesde.jpg')`;
}

// Set home background
const homeBg = document.getElementById('home-bg');
if (homeBg) {
    homeBg.setAttribute('data-image-src', "https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/table3.jpg");
    homeBg.style.backgroundImage = `url('https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/table3.jpg')`;
}

// Set reservations background (for sections with id)
const reservationsBg = document.getElementById('reservations-bg');
if (reservationsBg) {
    reservationsBg.setAttribute('data-image-src', "https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/table4.jpg");
    reservationsBg.style.backgroundImage = `url('https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/table4.jpg')`;
}

// Set reservations background (for sections with class and data-image-src)
const reservationsSections = document.querySelectorAll('.parallax_background.parallax-window[data-image-src*="reservations"]');
reservationsSections.forEach(bg => {
    bg.setAttribute('data-image-src', "https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/table4.jpg");
    bg.style.backgroundImage = `url('https://jaocruz.nyc3.digitaloceanspaces.com/Atarazana/table4.jpg')`;
});

// Set contact page home background (special case)
const contactHomeBg = document.querySelector('.home .parallax_background.parallax-window');
if (contactHomeBg && window.location.pathname.includes('contact')) {
    const imgUrl = "https://jaocruz.nyc3.cdn.digitaloceanspaces.com/Atarazana/2018/DSC_0002.JPG";
    contactHomeBg.setAttribute('data-image-src', imgUrl);
    contactHomeBg.style.backgroundImage = `url('${imgUrl}')`;
}

// Export event images for use in the events (blog) page
export const eventImages = {
    bodas: [
        "https://jaocruz.nyc3.cdn.digitaloceanspaces.com/Atarazana/2018/boda1.jpg",
        "https://jaocruz.nyc3.cdn.digitaloceanspaces.com/Atarazana/2018/boda2.JPG",
        "https://jaocruz.nyc3.cdn.digitaloceanspaces.com/Atarazana/2018/boda4.JPG",
        "https://jaocruz.nyc3.cdn.digitaloceanspaces.com/Atarazana/2018/boda3.JPG"
    ],
    // Add more event types here as needed
}; 