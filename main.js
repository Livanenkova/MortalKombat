import {Game} from './game.js';
import {HIT,ATTACK} from './variable.js';

// export const {player: player1Counter, name: player1Name, hp: player1Hp, img: player1img} = player1;
// export const {player: player2Counter, name: player2Name, hp: player2Hp, img: player2img} = player2;

export const {hit: hitEnemy,defence: defenceEnemy, value: valueEnemy} = HIT;
export const {hit,defence, value} = ATTACK;

const game = new Game();

game.start();



class Figth {
  constructor(props){

  }

  getFigth = async () =>{
    const body = fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
      method: 'POST',
      body: JSON.stringify({
          hit,
          defence,
      })
  });
    return body;
  }

  start = async () => {
    const info = await this.getFigth();
    console.log(info);
    // const result = info{hit,defence};

    figth = new Figth({
      ...info,

    })
  
  }
};

const figth = new Figth();

figth.start();