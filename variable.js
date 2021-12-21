import {changeHP, elHP,renderHP} from './backend.js'

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

export const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}
export const ATTACK = ['head', 'body', 'foot'];



