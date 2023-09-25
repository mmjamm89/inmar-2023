let form = document.getElementById('form-inmar');
form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(form.action, {
        method: 'POST',
        body: new FormData(document.getElementById('form-inmar')),
    }).then (
        console.log("hola")
    );
});