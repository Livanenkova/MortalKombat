import {player1, player2,HIT, ATTACK} from './variable.js'
import {createElement,createRandomNumber,getTime} from './utils.js'
import {$formFigth} from './main.js'


export function elHP() {
  return document.querySelector('.player' + this.player + ' .life');
}

export function renderHP($playerLife) {
  return this.elHP().style.width = this.hp + '%';
}

export function changeHP(damage) {
  this.hp -= damage;
  if (this.hp < 0) {
    this.hp = 0;
  }
};

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
