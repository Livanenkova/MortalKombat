const $arenas = document.querySelector('.arenas');

const  player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['узи','морковка','лимонка','м 16'],
  attack: function () {
    console.log(player1.name + ' Fight...')
  }
}

const  player2 = {
  name: 'SubZero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['калашников','морковка','дымовуха','м 16'],
  attack: function () {
    console.log(player2.name + ' Fight...')
  }
}

const createPlayer = function (player,playerObject) {
  const $player1 = document.createElement('div');
  $player1.classList.add(player);

  
  $arenas.appendChild($player1)
  
  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player1.appendChild($progressbar);

  const $character = document.createElement('div');
  $character.classList.add('character');
  $player1.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $progressbar.appendChild($life);
  $life.style.width = playerObject.hp + '%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $progressbar.appendChild($name);
  $name.innerText = playerObject.name;

  const $img = document.createElement('img');
  $img.classList.add('img');
  $character.appendChild($img);
  $img.src=playerObject.img;

}


createPlayer('player1', player1);
createPlayer('player2', player2);

