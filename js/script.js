'use strict';

(function () {

    const form = document.getElementById('main-form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const obj = {};

        const inputs = event.target.querySelectorAll('input');

        inputs.forEach(input => {

            input.addEventListener('focus', event => {
                if (input.value.length == 0) {
                    input.style.backgroundColor = "#eeaebc"
                }
            });

            input.addEventListener('input', event => {
                input.style.backgroundColor = "#ffffff"
            })

            obj[input.name] = input.value;
        });

        console.log(obj);
        createMessage(obj);
        event.target.reset();
    });

    function createMessage(data) {
        const divEmail = document.createElement('div');
        const divPassword = document.createElement('div');
        divEmail.innerText = data.Email;
        divPassword.innerText = data.Password;
        document.querySelector('.card-content').append(divEmail);
        document.querySelector('.card-content').append(divPassword);
    }
})();

