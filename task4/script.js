const text_link = document.querySelector('#text_link');
text_link.addEventListener('click', 
(event) => {
    event.preventDefault();
    const new_text = prompt('Введите новый текст');
    text_link.textContent = new_text;
})