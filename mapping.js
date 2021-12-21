import {createElement,createRandomNumber,getTime} from './utils.js'
import {logs} from './logs.js'
import {player1, player2} from './variable.js'

const {player: player1Counter, name: player1Name, hp: player1Hp, img: player1img} = player1;
const {player: player2Counter, name: player2Name, hp: player2Hp, img: player2img} = player2;
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

export function showResult() {
  if (player1Hp === 0 || player2Hp === 0){
    // generateLogs('draw', player2, player1);
    console.log(generateLogs('draw', player2, player1));
    $randomButton.disabled = true;
    const $reloadButton = createReloadButton();
    $arenas.appendChild($reloadButton);
    }  
    if (player1Hp === 0 && player1Hp < player2Hp) {
      generateLogs('end', player2, player1)
      $arenas.appendChild(playerLose(player2.name));
    } else if (player2Hp === 0 && player2Hp < player1Hp) {
      generateLogs('end', player1, player2)
      $arenas.appendChild(playerLose(player1Name));
    } else if ( player1Hp === 0 && player2Hp === 0) {
    $arenas.appendChild(playerLose());
  }
};

export function generateLogs (type, player1, player2, impairment) {
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