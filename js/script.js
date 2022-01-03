'use strict';

(function () {

    const form = document.getElementById('main-form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const inputs = event.target.querySelectorAll('input');
        const obj = {};


        inputs.forEach(input => {

            if (input.value.length == 0) {
                alert('Empty cells are not allowed!');
            }

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
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('card', 'mb-3');

        const divEmail = document.createElement('div');
        const divPassword = document.createElement('div');

        divPassword.innerText = data.Password;
        divEmail.innerText = data.Email;

        document.querySelector('.card-content').append(messageWrapper);
        messageWrapper.append(divEmail);
        messageWrapper.append(divPassword);
    }
})();

