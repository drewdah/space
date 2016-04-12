/*
	Level
*/
function Level( id )
{
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
	var offsetX = game.viewport.center.x - game.currentPlayer.x;
	var offsetY = game.viewport.center.y - game.currentPlayer.y;

	if(game.currentPlayer.x > game.viewport.center.x){
		this.offsetX = offsetX;
	}

	if(game.currentPlayer.y > game.viewport.center.y){
		this.offsetY = offsetY;
	}

	this.offsetX = -(game.currentPlayer.x - game.viewport.center.x);
	this.offsetY = -(game.currentPlayer.y - game.viewport.center.y);
};

Level.prototype.draw = function()
{
	game.screen.drawImage( this.background, this.offsetX, this.offsetY, this.width, this.height);
};

Level.prototype.isWithinBoundary = function( x, y )
{
	return isPointInPoly( this.hitbox, {x: x, y: y});
};