// Animation de l'image de profil au survol

const photo = document.getElementById('photo');

if (photo) {
    photo.addEventListener('mouseenter', () => {
        photo.style.transition = 'transform 0.5s';
        photo.style.transform = 'scale(1.1) rotate(3deg)';
    });
    photo.addEventListener('mouseleave', () => {
        photo.style.transform = 'scale(1) rotate(0deg)';
    });
}
