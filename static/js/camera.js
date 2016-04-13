/*
	Camera
*/
function Camera(viewport)
{
	this.setViewPort(viewport);
	this.setDimensions(this.viewport.height, this.viewport.width);
	this.setPosition(0, 0);

	this.hitbox = [
		{ x: this.x, y: this.y },
		{ x: this.width, y: this.y },
		{ x: this.width, y: this.height },
		{ x: this.x, y: this.height }
	];
}
Camera.inheritsFrom(Entity);

Camera.prototype.update = function() {

}

Camera.prototype.draw = function() {
	// Red rectangle
	game.screen.beginPath();
	game.screen.rect(this.x,this.y,this.width,this.height); 
	game.screen.stroke();
}

Camera.prototype.setViewPort = function(viewport) {
	this.viewport = viewport;
}

Camera.prototype.setPosition = function(x, y) {
	this.x = x;
	this.y = y;
}

Camera.prototype.setDimensions = function(height, width) {
	this.height = this.viewport.height;
	this.width = this.viewport.width;
}

Camera.prototype.isWithinBoundary = function( x, y )
{
	return isPointInPoly( this.hitbox, {x: x, y: y});
};