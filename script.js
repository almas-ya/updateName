const para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Введите имя игрока');
    para.textContent = 'Player 1: ' + name;
}