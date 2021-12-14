const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const  player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['узи','морковка','лимонка','м 16'],
  attack: function () {
    console.log(player1.name + ' Fight...')
  }
}

const  player2 = {
  player: 2,
  name: 'SubZero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['калашников','морковка','дымовуха','м 16'],
  attack: function () {
    console.log(player2.name + ' Fight...')
  }
}

function createRandomNumber(number) { 
  return Math.ceil(Math.random() * number);
};

function createElement (tag, className) {
  const $tag = document.createElement(tag);
  if (className){
    $tag.classList.add(className);
  }
  return $tag;
};

const createPlayer = function (playerObject) {
  const $player = createElement('div','player' + playerObject.player);
  const $progressbar = createElement('div','progressbar');
  const $character = createElement('div','character');
  const $life = createElement('div','life');
  const $name = createElement('div','name');
  const $img = createElement('img');

  $img.classList.add('img');
  
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  $life.style.width = playerObject.hp + '%';
  $name.innerText = playerObject.name;
  $img.src=playerObject.img;
  return $player
};


function changeHP (player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life');
  player.hp -= createRandomNumber(20);
  $playerLife.style.width = player.hp + '%';
  if (player.hp <= 0) {
    player.hp = 0;
}
};

function playerWin(name){
  const $winTitle = createElement('div','winTitle');
  if (name) {
  $winTitle.innerText = name + ' win';
  } else {
    $winTitle.innerText ='draw';
  }
  return $winTitle;
};

$randomButton.addEventListener('click',function(){
  changeHP(player1);
  changeHP(player2);
if (player1.hp === 0 || player2.hp === 0){
  $randomButton.disabled = true;
}

if (player1.hp === 0 && player1.hp < player2.hp) {
  $arenas.appendChild(playerWin(player2.name));
} else if (player2.hp === 0 && player2.hp < player1.hp) {
  $arenas.appendChild(playerWin(player1.name));
} else if ( player1.hp === 0 && player2.hp === 0) {
  $arenas.appendChild(playerWin());
}
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
