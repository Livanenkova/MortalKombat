// class Player  {
//   constructor(props){
//     console.log(props)
//     this.name = props.name;
//     this.hp = props.hp;
//     this.type = props.type;
//   }

//   whoop = () => {
//     console.log(`${this.name} lets figth`)
//   }
// }

// const player1 = new Player({
//   name: 'Scorpion',
//   hp: 100,
//   type: 'fighters',
// })
// console.log(player1);
// console.log(player1.whoop());

// class Player1 extends Player{
//   constructor(props) {
//     super(props)
//     this.winners = props.winners;
//   }

//   whoop = () => {
//     console.log('This is new whoop')
//   }
// }

// const player2 = new Player1({
//   name: 'Kitana',
//   hp: 100,
//   type: 'fighters',
//   winners: true,
// })

// console.log(player2)

class Player  {
  constructor(props){
    console.log(props)
    this.player = props.player;
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    console.log(this.player, this.name,this.hp,this.img)
  }

  elHP() {
    return document.querySelector(`.player${this.player} .life`);
  }

  renderHP($playerLife) {
    return this.elHP().style.width = this.hp + '%';
  }

  changeHP(damage) {
    this.hp -= damage;
    if (this.hp < 0) {
      this.hp = 0;
    }
  };
}

export const player1 = new Player({
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
})


export const player2 = new Player({
  player: 2,
  name: 'SubZero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
})

  console.log(player1);
  console.log(player2);

