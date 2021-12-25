import { player1, player2 } from './player.js'
import Game from './game.js';

export const {player: player1Counter, name: player1Name, hp: player1Hp, img: player1img} = player1;
export const {player: player2Counter, name: player2Name, hp: player2Hp, img: player2img} = player2;
// export const $formFigth = document.querySelector('.control');

const game = new Game();

console.log(game.start());