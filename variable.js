export const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}
export const ATTACK = ['head', 'body', 'foot'];

export const  player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['узи','морковка','лимонка','м 16'],
  changeHP,
  elHP,
  renderHP,
}

export const  player2 = {
  player: 2,
  name: 'SubZero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['калашников','морковка','дымовуха','м 16'],
  changeHP,
  elHP,
  renderHP,
}

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