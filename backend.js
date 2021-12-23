import {player1, player2} from './player.js'
import {HIT, ATTACK,} from './variable.js'
import {createElement,createRandomNumber,getTime} from './utils.js'
import {$formFigth, $randomButton,$arenas} from './main.js'
import {logs} from './logs.js'

export const {player: player1Counter, name: player1Name, hp: player1Hp, img: player1img} = player1;
export const {player: player2Counter, name: player2Name, hp: player2Hp, img: player2img} = player2;

const $chat = document.querySelector('.chat');


export function playerLose(name){
  const $winTitle = createElement('div','loseTitle');
  if (name) {
    $winTitle.innerText = name + ' wins';
  } else {
    $winTitle.innerText ='Draw';
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
      generateLogs('end', player2, player1)
      $arenas.appendChild(playerLose(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
      generateLogs('end', player1, player2)
      $arenas.appendChild(playerLose(player1.name));
    } else if ( player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerLose());
  }
};

export function generateLogs (type, impairment) {
  const time = getTime();
  let text;
  let el;
  switch(type) {
    case 'start':
      text = logs.start.replace('[time]',time).replace('[player1]',player1Name).replace('[player2]',player2Name);
      el = `<p> ${text}</p>`
    break
    case 'end':
      text = logs[type][createRandomNumber(logs[type].length-1)].replace('[playerWins]',player1Name).replace('[playerLose]',player2Name);
      el = `<p>${text}</p>`
      break
    case 'hit':
      text = logs[type][createRandomNumber(logs[type].length-1)].replace('[playerKick]',player1Name).replace('[playerDefence]',player2Name);
      el = `<p>${time} ${text} - ${impairment} [${impairment}/100]</p>`
    break
    case 'defence':
      text = logs[type][createRandomNumber(logs[type].length-1)].replace('[playerKick]',player2Name).replace('[playerDefence]',player1Name);
      el = `<p>${time} ${text}</p>`
      console.log('defence', impairment)
    break
    case 'draw':
      text = logs.draw;
      el = `<p>${text}</p>`
      break
  
    default:
      text = logs.draw;
      el = `<p>${text}</p>`
  }
  $chat.insertAdjacentHTML('afterbegin', el)
}