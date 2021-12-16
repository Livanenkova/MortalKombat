const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $reloadWrap = createElement('div','reloadWrap');

function createRandomNumber(number) { 
  return Math.ceil(Math.random() * number);
};

const $formFigth = document.querySelector('.control')

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const  player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['узи','морковка','лимонка','м 16'],
  attack,
  changeHP,
  elHP,
  renderHP,
}

const  player2 = {
  player: 2,
  name: 'SubZero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['калашников','морковка','дымовуха','м 16'],
  attack,
  changeHP,
  elHP,
  renderHP,
}

function elHP() {
  return document.querySelector('.player' + this.player + ' .life');
}

function renderHP($playerLife) {
  return this.elHP().style.width = this.hp + '%';
}

function changeHP(damage) {
  this.hp -= damage;
  if (this.hp < 0) {
    this.hp = 0;
  }
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className){
    $tag.classList.add(className);
  }
  return $tag;
};

function attack() {
  return console.log(this.name + ' Fight...')
}

const createPlayer = function(player) {
  const $player = createElement('div','player' + player.player);
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

  $life.style.width = player.hp + '%';
  $name.innerText = player.name;
  $img.src = player.img;
  return $player
};

// function changeHP(player,number) {
//   const $playerLife = document.querySelector('.player' + player.player + ' .life');
//   player.hp -= number;
//   $playerLife.style.width = player.hp + '%';
//   if (player.hp <= 0) {
//     player.hp = 0;
//   }
// };

function showResult(name){
  const $winTitle = createElement('div','loseTitle');
  if (name) {
    $winTitle.innerText = name + ' wins';
  } else {
    $winTitle.innerText ='Draw';
  }
  return $winTitle;
};

function createReloadButton() {
  
  const $reloadWrap = createElement('div','reloadWrap');
  const $reloadButton = createElement('button','button');
  $reloadButton.innerText ='Restart';
  $reloadWrap.appendChild($reloadButton);
  
  $reloadButton.addEventListener('click',function(){
    window.location.reload();
  });
  return $reloadWrap
}



$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack () {
  const hit = ATTACK[createRandomNumber(3)-1];
  console.log(hit)
  const defence = ATTACK[createRandomNumber(3)-1];
  console.log(defence)
  return {
    value: createRandomNumber(HIT[hit]),
    hit,
    defence,
  }
}

$formFigth.addEventListener('submit',function(e){
  e.preventDefault()
  $reloadWrap.disabled = true;
  console.dir($formFigth);
  const enemy = enemyAttack();
  const attack = {};



  for (let item of $formFigth){
    if (item.checked && item.name === "hit") {
      attack.value = createRandomNumber(HIT[item.value]);
      attack.hit = item.value;


    }

    if (item.checked && item.name === "defence") {
      attack.defence = item.value;
      console.log(attack.defence)
      if (attack.hit === enemy.defence || attack.defence === enemy.hit) {
        $arenas.appendChild(showResult());
      }  
      else if (attack.hit !== enemy.defence || attack.defence !== enemy.hit) {
        player1.changeHP(attack.value);
        console.log(attack.value)
        player1.renderHP();
        player2.changeHP(enemy.value);
        console.log(enemy.value)
        player2.renderHP();
        console.log(player1.hp)
        console.log(player2.hp)
      }
    }

    

    if (player1.hp === 0 || player2.hp === 0){
      $randomButton.disabled = true;
      const $reloadButton = createReloadButton();
      $arenas.appendChild($reloadButton);
    }  

    if (player1.hp === 0 && player1.hp < player2.hp) {
      $arenas.appendChild(showResult(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
      $arenas.appendChild(showResult(player1.name));
    } else if ( player1.hp === 0 && player2.hp === 0) {
      $arenas.appendChild(showResult());
    }
    item.checked = false;

    
  }
  


  console.log('####, a', attack);
  console.log('####, e', enemy);
});

