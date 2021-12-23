import {logs} from './logs.js'
import {createElement,createRandomNumber,getTime} from './utils.js'
import {player1, player2,HIT, ATTACK} from './variable.js'
import {playerLose,showResult,generateLogs,createReloadButton} from './mapping.js'
import {enemyAttack,PlayerAttack,changeHP, elHP,renderHP} from './backend.js'

export const $arenas = document.querySelector('.arenas');
export const $randomButton = document.querySelector('.button');
export const $reloadWrap = createElement('div','reloadWrap');
export const $formFigth = document.querySelector('.control');



const {player: player1Counter, name: player1Name, hp: player1Hp, img: player1img} = player1;
const {player: player2Counter, name: player2Name, hp: player2Hp, img: player2img} = player2;

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

$formFigth.addEventListener('submit',function(e){
  e.preventDefault()
  $reloadWrap.disabled = true;
  const enemy = enemyAttack();
  const attack = PlayerAttack();
  console.log(attack);
  console.log(enemy);

  if (attack.hit === enemy.defence && attack.defence === enemy.hit) {
    generateLogs('draw');
    $arenas.appendChild(playerLose());
    console.log("ничья")
  }
  
  if (attack.hit === enemy.defence) {
    generateLogs('defence',player2,player1);
    $arenas.appendChild(playerLose());
  }

  if (attack.defence === enemy.hit) {
    generateLogs('defence',player2,player1);
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
    generateLogs('hit',player1,player2,enemy.value);
  }
  showResult();
});


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
generateLogs('start', player1, player2);
