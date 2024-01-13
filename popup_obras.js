document.querySelectorAll('#obras-desktop-container .galeria-img-obra-desktop img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-img-desktop').style.display = 'block';
        document.querySelector('.popup-img-desktop img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-img-desktop span').onclick = () => {
    document.querySelector('.popup-img-desktop').style.display = 'none';
};
