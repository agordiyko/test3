const   btnElem = document.querySelector('.player__btn');

btnElem.addEventListener('click', () => {
    if(btnElem.classList.contains('play')){
        btnElem.classList.remove('play');
        btnElem.innerText = "Остановлено";
    } else if (!btnElem.classList.contains('play')){
        btnElem.classList.add('play');
        btnElem.innerText = "Запущено";
    }
});


