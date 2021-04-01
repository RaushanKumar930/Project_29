class Block{
    constructor(x, y) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,30,40);
        pop();
      }
}
