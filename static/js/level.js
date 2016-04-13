/*
	Level
*/
function Level( id )
{
	this.width = 1024;
	this.height = 768;

	this.background = assetMgr.assets['background' + id];

	this.hitbox = [
		{ x: 0, y: 0 },
		{ x: this.width, y: 0 },
		{ x: this.width, y: this.height },
		{ x: 0, y: this.height }
	];

	this.offsetX = 0;
	this.offsetY = 0;
}
Level.inheritsFrom( Entity );

Level.prototype.update = function()
{
	this.offsetX = -game.camera.x;
	this.offsetY = -game.camera.y;
};

Level.prototype.draw = function()
{
	game.screen.drawImage( this.background, this.offsetX, this.offsetY, this.width, this.height);
};

Level.prototype.isWithinBoundary = function( x, y )
{
	return isPointInPoly( this.hitbox, {x: x, y: y});
};