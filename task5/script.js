const duplicateField = document.querySelector('#duplicateField');
const text_input = document.querySelector('#text_input');
const button = document.querySelector('#button');

text_input.addEventListener('input',
    (event) => {
        duplicateField.textContent = '' + text_input.value;
    })

button.addEventListener('click',
    (event) => {
        event.preventDefault();
        console.log(duplicateField.textContent);
        text_input.value = '';
        duplicateField.textContent = '';
    })