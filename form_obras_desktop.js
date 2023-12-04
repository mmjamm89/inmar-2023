let form = document.getElementById('form-inmar-obras-desktop');
form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(form.action, {
        method: 'POST',
        body: new FormData(document.getElementById('form-inmar-obras-desktop')),
    }).then (
        console.log("hola")
    );
});