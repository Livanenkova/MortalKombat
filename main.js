const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $reloadWrap = createElement('div','reloadWrap');
const $formFigth = document.querySelector('.control');
const $chat = document.querySelector('.chat');

const logs = {
  start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
      'Результат удара [playerWins]: [playerLose] - труп',
      '[playerLose] погиб от удара бойца [playerWins]',
      'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: [
      '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
      '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
      '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
      '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
      '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
      '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
      '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
      '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
      '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
      '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
      '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
      '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
      '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
      '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
      '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
      '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
      '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
      '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
  ],
  defence: [
      '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
      '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
      '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
      '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
      '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
      '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
  ],
  draw: 'Ничья - это тоже победа!'
};

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
  changeHP,
  elHP,
  renderHP,
  attack,
}

const  player2 = {
  player: 2,
  name: 'SubZero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['калашников','морковка','дымовуха','м 16'],
  changeHP,
  elHP,
  renderHP,
  attack,
}

/**
 * 
 * @param {number} number 
 * @returns {number}
 */
function createRandomNumber(number) { 
  return Math.ceil(Math.random() * number);
};

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

function playerLose(name){
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

function enemyAttack () {
  const hit = ATTACK[createRandomNumber(3)-1];
  const defence = ATTACK[createRandomNumber(3)-1];
  return {
    value: createRandomNumber(HIT[hit]),
    hit,
    defence,
  }
}

function PlayerAttack() {
  const attack = {};
  for (let item of $formFigth){
    if (item.checked && item.name === "hit") {
      attack.value = createRandomNumber(HIT[item.value]);
      attack.hit = item.value;
      item.checked = false;
    }

    if (item.checked && item.name === "defence") {
      attack.defence = item.value;
      item.checked = false;
    }
  }
return attack;
}

function showResult() {
  if (player1.hp === 0 || player2.hp === 0){
    $randomButton.disabled = true;
    const $reloadButton = createReloadButton();
    $arenas.appendChild($reloadButton);
    }  
    if (player1.hp === 0 && player1.hp < player2.hp) {
      generateLogs('end', player2, player1)
      $arenas.appendChild(playerLose(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
      generateLogs('end', player1, player2)
      $arenas.appendChild(playerLose(player1.name));
    } else if ( player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerLose());
  }
};

// function generateLogs (type, player1, player2) {
//   console.log(logs[type].length-1)
  // const text = logs[type][createRandomNumber(logs[type].length-1)].replace('[playerKick]',player1.name).replace('[playerDefence]',player2.name);
  // const el = `<p>${text}</p>`
  // $chat.insertAdjacentHTML('afterbegin', el)
// }

function generateLogs (type, player1, player2, impairment) {
  console.log(player1)
  console.log(player1)
  console.log(impairment);
  time = getTime();
  let text;
  let el = `<p>${text}</p>`;
  switch(type) {
    case 'start':
      text = logs.start.replace('[time]',time).replace('[player1]',player1.name).replace('[player2]',player2.name);
      el = `<p> ${text}</p>`
      $chat.insertAdjacentHTML('afterbegin', el)
    break
    case 'end':
      text = logs[type][createRandomNumber(logs[type].length-1)].replace('[playerWins]',player1.name).replace('[playerLose]',player2.name);
      el = `<p>${text}</p>`
      $chat.insertAdjacentHTML('afterbegin', el)
      break
    case 'hit':
      text = logs[type][createRandomNumber(logs[type].length-1)].replace('[playerKick]',player1.name).replace('[playerDefence]',player2.name);
      el = `<p>${time} ${text} ${impairment} [${impairment}/100]</p>`
      $chat.insertAdjacentHTML('afterbegin', el)
      console.log('hit', impairment)
    break
    case 'defence':
      text = logs[type][createRandomNumber(logs[type].length-1)].replace('[playerKick]',player2.name).replace('[playerDefence]',player1.name);
      el = `<p>${time} ${text} ${impairment} [${impairment}/100]</p>`
      $chat.insertAdjacentHTML('afterbegin', el)
      console.log('defence', impairment)
    break
  
    default:
      text = logs.draw;
      el = `<p>${text}</p>`
      $chat.insertAdjacentHTML('afterbegin', el)
  }
}

function getTime() {
  const date = new Date;
  return date.getHours() + ':' + date.getMinutes();
}

$formFigth.addEventListener('submit',function(e){
  e.preventDefault()
  $reloadWrap.disabled = true;
  const enemy = enemyAttack();
  const attack = PlayerAttack();
  
  if (attack.hit === enemy.defence || attack.defence === enemy.hit) {
    generateLogs('draw', player2, player1)
    $arenas.appendChild(playerLose());
  }  

  if (attack.defence !== enemy.hit){
    player1.changeHP(enemy.value);
    player1.renderHP();
    generateLogs('hit',player2,player1,enemy.value);
  }

  if (enemy.defence !== attack.hit) {
    player2.changeHP(attack.value);
    player2.renderHP();
    generateLogs('defence',player1,player1,attack.value);
  }
  showResult();
});


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
generateLogs('start', player1, player2);
