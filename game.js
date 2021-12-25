import {$formFigth, $randomButton,$arenas,$reloadWrap} from './main.js'
import { player1, player2 } from './player.js'
import {createElement,createRandomNumber,getTime} from './utils.js'
import {playerLose,createReloadButton,enemyAttack,PlayerAttack,showResult,generateLogs} from './backend.js'
export default class Game {
  constructor(props){

  }

  start() {
    const createPlayer = function({player,hp,name,img}) {
      const $player = createElement('div',`player${player}`);
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
    
      $life.style.width = hp + '%';
      $name.innerText = name;
      $img.src = img;
      return $player
    };
    
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
    });
    
    
    $arenas.appendChild(createPlayer(player1));
    $arenas.appendChild(createPlayer(player2));
    generateLogs('start', player1, player2);
  }

}
