import { player1, player2 } from './player.js'
import {createElement,createRandomNumber,getTime} from './utils.js'
import {playerLose,createReloadButton,enemyAttack,PlayerAttack,showResult,generateLogs} from './backend.js'
import Game from './game.js';

export const $arenas = document.querySelector('.arenas');
export const $randomButton = document.querySelector('.button');
export const $reloadWrap = createElement('div','reloadWrap');
export const $formFigth = document.querySelector('.control');


export const {player: player1Counter, name: player1Name, hp: player1Hp, img: player1img} = player1;
export const {player: player2Counter, name: player2Name, hp: player2Hp, img: player2img} = player2;


const game = new Game();

console.log(game.start());