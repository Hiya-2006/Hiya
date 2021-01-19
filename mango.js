class mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
    }
		this.x=x;
		this.y=y;
		this.r=r;
	
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
        this.image = loadImage("Plucking mangoes/mango.png");


	}
	display()
	{
			
				

			push()
			
			
			
			
            
            pop()
            imageMode(CENTER);
            image(this.image,this.x, this.y, this.r*1.5, this.r*1.5);  
			
			
	}

}