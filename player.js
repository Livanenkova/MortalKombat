class Player  {
  constructor(props){
    this.player = props.player;
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
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