/*
	Viewport
*/
function ViewPort()
{	
	this.canvas = document.getElementById("screen");
	
	this.width = 800;
	this.height = 600;
	
	this.center = {x:this.width/2,y:this.height/2}
	
	this.x;
	this.y;	
}