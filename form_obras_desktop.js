let formDesktop = document.getElementById('form-inmar-obras-desktop');
formDesktop.addEventListener('submit', e => {
    e.preventDefault();

    fetch(formDesktop.action, {
        method: 'POST',
        body: new FormData(document.getElementById('form-inmar-obras-desktop')),
    }).then (
        console.log("hola")
    );
});