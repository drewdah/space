/*
	Level
*/
function Level( id )
{
	this.x = 0;
	this.y = 0;

	this.width = 1600;
	this.height = 1200;

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
	this.x = -game.camera.x;
	this.y = -game.camera.y;
};

Level.prototype.draw = function()
{
	game.screen.drawImage( this.background, this.x, this.y, this.width, this.height );
};

Level.prototype.isWithinBoundary = function( x, y )
{
	return isPointInPoly( this.hitbox, {x: x, y: y});
};