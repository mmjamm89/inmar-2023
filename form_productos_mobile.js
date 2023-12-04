let formProductosMobile = document.getElementById('form-inmar-productos-mobile');
formProductosMobile.addEventListener('submit', e => {
    e.preventDefault();

    fetch(formProductosMobile.action, {
        method: 'POST',
        body: new FormData(document.getElementById('form-inmar-productos-mobile')),
    }).then (
        console.log("hola")
    );
});