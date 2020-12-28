class Box {
  constructor(x, y, width, height) {

    var option = {
      isStatic: false
    }
    this.visiblity = 0;
    this.body = Bodies.rectangle(x, y, width, height, option);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    

  }
  display() {
    if (this.body.speed < 3) {
      var pos = this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
    }
    else {
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity - 5;
      tint(255, this.visiblity);
      pop();
    }
  }
  score(){
    if(this.visiblity<0 && this.visiblity>-150){
      score++;
    }
  }
};