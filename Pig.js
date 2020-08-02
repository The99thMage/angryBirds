class Pig extends BaseClass{
  constructor(x, y, width, height) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/enemy.png");
  }

  display(){
    if(this.body.speed < 3){
      super.display();
    }else{
      Matter.World.remove(world, this.body);
    }
  }
};
