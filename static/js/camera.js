/*
	Camera
*/
function Camera(viewport)
{
	this.setViewPort(viewport);
	this.setDimensions(this.viewport.height, this.viewport.width);
	this.setPosition(0, 0);

	this.buffer = 200;

	this.hitbox = [
		{ x: this.x + this.buffer, y: this.y + this.buffer},
		{ x: this.width - this.buffer, y: this.y + this.buffer },
		{ x: this.width - + this.buffer, y: this.height - this.buffer },
		{ x: this.x + this.buffer, y: this.height - this.buffer }
	];
}
Camera.inheritsFrom(Entity);

Camera.prototype.update = function() {

}

Camera.prototype.draw = function() {

}

Camera.prototype.setViewPort = function(viewport) {
	this.viewport = viewport;
}

Camera.prototype.setPosition = function(x, y) {
	this.setX(x);
	this.setY(y);
}

Camera.prototype.setX = function(x) {
	this.x = x;
}

Camera.prototype.setY = function(y) {
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