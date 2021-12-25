import {createElement,createRandomNumber,getTime} from './utils.js'
import {playerLose,createReloadButton,enemyAttack,PlayerAttack,showResult,generateLogs,createPlayer} from './backend.js'
import {Player} from './player.js'

export const $arenas = document.querySelector('.arenas');
export const $randomButton = document.querySelector('.button');
export const $reloadWrap = createElement('div','reloadWrap');
export const $formFigth = document.querySelector('.control');

export let player1;
export let player2;


export class Game {
  constructor(props){
  }

  getPlayers = async () =>{
    const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
    return body;
  }

  getEnemy = async () =>{
    const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose').then(res => res.json());
    return body;
  }

  start = async () => {
    const players = await this.getPlayers();
    console.log(players);
    const enemy = await this.getEnemy();
    console.log(enemy);
    const p1 = players[createRandomNumber(players.length) -1];
    const p2 = enemy;

    player1 = new Player({
      ...p1,
      player:1,
      rootSelector: 'arenas',
    })
  
    player2 = new Player({
      ...p2,
      player:2,
      rootSelector: 'arenas',
  })
  console.log(player2)

  $arenas.appendChild(createPlayer(player1));
  $arenas.appendChild(createPlayer(player2));
  generateLogs('start', player1, player2);


  $formFigth.addEventListener('submit',function(e){
    e.preventDefault()
    $reloadWrap.disabled = true;
    const {hit: hitEnemy,defence: defenceEnemy, value: valueEnemy} = enemyAttack();
    const {hit,defence, value}  = PlayerAttack();
    
    if (hit === defenceEnemy || defence === hitEnemy) {
      generateLogs('draw', player2, player1)
      $arenas.appendChild(playerLose());
    }  
  
    if (defence !== hitEnemy){
      player1.changeHP(valueEnemy);
      player1.renderHP();
      generateLogs('hit',player2,player1,valueEnemy);
    }
  
    if (defenceEnemy !== hit) {
      player2.changeHP(value);
      player2.renderHP();
      generateLogs('defence',player1,player1,value);
    }
    showResult();
    })
  }
};
