class stone{ 
    constructor(x, y, width, height)
     { 
     var options = { 
      
     isStatic: false,
     restitution:0,
     friction:1,
     density:1.2
}
            this.body = Bodies.rectangle(x,y,width,height,options);
            this.width = width; 
            this.height = height;
            World.add(world, this.body);
            this.image = loadImage("Plucking mangoes/stone.png");

             } 
             
            display(){ 
            var pos =this.body.position; 
            rectMode(CENTER); 
            fill("grey");
            rect(pos.x, pos.y, this.width, this.height); 
            imageMode(CENTER);
            image(this.image, 20, 530, 50,50);  
          }
             };