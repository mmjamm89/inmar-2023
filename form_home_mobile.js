let formMobile = document.getElementById('form-inmar-home-mobile');
formMobile.addEventListener('submit', e => {
    e.preventDefault();

    fetch(formMobile.action, {
        method: 'POST',
        body: new FormData(document.getElementById('form-inmar-home-mobile')),
    }).then (
        console.log("hola")
    );
});