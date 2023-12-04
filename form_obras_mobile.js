let formObrasMobile = document.getElementById('form-inmar-obras-mobile');
formObrasMobile.addEventListener('submit', e => {
    e.preventDefault();

    fetch(formObrasMobile.action, {
        method: 'POST',
        body: new FormData(document.getElementById('form-inmar-obras-mobile')),
    }).then (
        console.log("hola")
    );
});