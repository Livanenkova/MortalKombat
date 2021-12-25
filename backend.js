import {HIT, ATTACK,} from './variable.js'
import {$arenas,$randomButton,$reloadWrap,player1, player2} from './game.js'
import {createElement,createRandomNumber,getTime} from './utils.js'
import {logs} from './logs.js'

// const {player: player1Counter, name: player1Name, hp: player1Hp, img: player1img} = player1;
// const {player: player2Counter, name: player2Name, hp: player2Hp, img: player2img} = player2;

export const {hit: hitEnemy,defence: defenceEnemy, value: valueEnemy} = enemyAttack();
export const {hit,defence, value}  = PlayerAttack();

const $chat = document.querySelector('.chat');


export function playerLose(name){
  const $winTitle = createElement('div','loseTitle');
  if (player1.hp === 0 || player2.hp === 0) {
    $winTitle.innerText = name + ' wins';
  }
  else if (player1.hp === 0 && player2.hp === 0) {
    $winTitle.innerText = ' Draw';
  }
  return $winTitle;
};

export function createReloadButton() {
  
  const $reloadWrap = createElement('div','reloadWrap');
  const $reloadButton = createElement('button','button');
  $reloadButton.innerText ='Restart';
  $reloadWrap.appendChild($reloadButton);
  
  $reloadButton.addEventListener('click',function(){
    window.location.reload();
  });
  return $reloadWrap
}

export function enemyAttack () {
  const hit = ATTACK[createRandomNumber(3)-1];
  const defence = ATTACK[createRandomNumber(3)-1];
  return {
    value: createRandomNumber(HIT[hit]),
    hit,
    defence,
  }
}

export function PlayerAttack() {
  const attack = {};
  const $formFigth = document.querySelector('.control');
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

export function showResult() {
  if (player1.hp === 0 || player2.hp === 0){
    $randomButton.disabled = true;
    const $reloadButton = createReloadButton();
    $arenas.appendChild($reloadButton);
    }  
    if (player1.hp === 0 && player1.hp < player2.hp) {
      generateLogs('end', valueEnemy)
      console.log(player1.hp)
      $arenas.appendChild(playerLose(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
      generateLogs('end', player2.hp)
      $arenas.appendChild(playerLose(player1.name));
      console.log(player2.hp)
    } else if ( player1.hp === 0 && player2.hp === 0) {
      console.log(player1.hp)
      console.log(player2.hp)
    $arenas.appendChild(playerLose());
  }
};

export function generateLogs(type, impairment) {
  const time = getTime();
  let text;
  let el;
  switch(type) {
    case 'start':
      text = logs.start.replace('[time]',time).replace('[player1]',player1.name).replace('[player2]',player2.name);
      el = `<p> ${text}</p>`
    break
    case 'end':
      text = logs[type][createRandomNumber(logs[type].length-1)].replace('[playerWins]',player1.name).replace('[playerLose]',player2.name);
      el = `<p>${text}</p>`
      break
    case 'hit':
      text = logs[type][createRandomNumber(logs[type].length-1)].replace('[playerKick]',player1.name).replace('[playerDefence]',player2.name);
      el = `<p>${time} ${text} - ${100 - impairment.hp} [${100 - impairment.hp}/100]</p>`
    break
    case 'defence':
      text = logs[type][createRandomNumber(logs[type].length-1)].replace('[playerKick]',player2.name).replace('[playerDefence]',player1.name);
      el = `<p>${time} ${text}</p>`
      console.log('defence', 100 - impairment.hp)
    break
    case 'draw':
      text = logs.draw;
      el = `<p>${text}</p>`
      break
  }
  $chat.insertAdjacentHTML('afterbegin', el)
};

export function createPlayer(player) {
  console.log(player.name)
  console.log(player.player)
  console.log(player.img)
  const $player = createElement('div',`player` + player.player);
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
}