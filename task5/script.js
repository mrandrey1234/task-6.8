const input = document.querySelector('input');
const button = document.querySelector('button');
const textBlock = document.querySelector('#duplicateField');

input.addEventListener('input', () => {
    textBlock.textContent = input.value;
});

button.addEventListener('click', () => {
    event.preventDefault();

    console.log(input.value);

    input.value = '';
    textBlock.textContent = '';
});

