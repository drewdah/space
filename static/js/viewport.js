/*	Viewport*/function ViewPort(id, width, height){	this.width = width;	this.height = height;	this.center = { x:this.width/2, y:this.height/2 };	this.canvas = document.createElement("canvas");	this.canvas.id = id;	this.canvas.width = this.width;	this.canvas.height = this.height;	document.body.appendChild(this.canvas);}