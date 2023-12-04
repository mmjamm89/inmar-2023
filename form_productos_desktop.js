let formProductosDesktop = document.getElementById('form-inmar-productos-desktop');
formProductosDesktop.addEventListener('submit', e => {
    e.preventDefault();

    fetch(formProductosDesktop.action, {
        method: 'POST',
        body: new FormData(document.getElementById('form-inmar-productos-desktop')),
    }).then (
        console.log("hola")
    );
});