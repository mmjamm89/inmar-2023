let formContactoMobile = document.getElementById('form-inmar-contacto-mobile');
formContactoMobile.addEventListener('submit', e => {
    e.preventDefault();

    fetch(formContactoMobile.action, {
        method: 'POST',
        body: new FormData(document.getElementById('form-inmar-contacto-mobile')),
    }).then (
        console.log("hola")
    );
});