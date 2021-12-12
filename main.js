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

function createRandomNumber() {
  let humber = Math.ceil(Math.random() * 20);
  return humber;
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

// function changeHP (player) {
//   const $playerLife = document.querySelector('.player' + player.player + ' .life');
//   player.hp -= createRandomNumber();
//   $playerLife.style.width = player.hp + '%';
//   if (player.hp <= 0) {
//     player.hp = 0;
//     $arenas.appendChild(playerLose(player.name));
//   }
// };

// function changeHP (player) {
//   const $playerLife = document.querySelector('.player' + player.player + ' .life');
//   player.hp -= createRandomNumber();
//   $playerLife.style.width = player.hp + '%';
//   if (player.hp <= 0) {
//     player.hp = 0;
//     $arenas.appendChild(playerWin(player.name));
//     $randomButton.disabled = true;
//   }
// };

function changeHP (player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life');
  player.hp -= createRandomNumber();
  $playerLife.style.width = player.hp + '%';
  if (player1.hp <= 0) {
    player.hp = 0;
    $arenas.appendChild(playerWin(player2.name));
    $randomButton.disabled = true;
  } else if (player2.hp <= 0) {
    player.hp = 0;
    $arenas.appendChild(playerWin(player1.name));
    $randomButton.disabled = true;
  }
  
};

// function playerLose(name){
//   const $loseTitle = createElement('div','loseTitle');
//   $loseTitle.innerText = name + ' lose';
//   return $loseTitle;
// };

function playerWin(name){
  const $winTitle = createElement('div','winTitle');
  $winTitle.innerText = name + ' win';
  return $winTitle;
};

console.log(createRandomNumber());



$randomButton.addEventListener('click',function(){
  console.log(player1.hp);
  changeHP(player1);
  changeHP(player2);
})
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

