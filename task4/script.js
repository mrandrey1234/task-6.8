const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault();

    let newText = prompt('Введите новый текст');

    if(newText != null && newText !== ''){
        this.textContent = newText;
    }
});