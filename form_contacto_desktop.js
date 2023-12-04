let form = document.getElementById('form-inmar-contacto-desktop');
form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(form.action, {
        method: 'POST',
        body: new FormData(document.getElementById('form-inmar-contacto-desktop')),
    }).then (
        console.log("hola")
    );
});