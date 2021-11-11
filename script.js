'use strict';

/* // setItem - для записи значения (ключа)
localStorage.setItem('number', 5);

// getImet - для получения ключа
localStorage.getItem('number');
console.log(localStorage.getItem('number'));

// removeItem - для удаления ключа
localStorage.removeItem('number');

// clear - для полной очистки хранилища
localStorage.clear(); */

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
}

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('Alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('Alex')));