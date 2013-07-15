/*
	Player
*/
function Player()
{
	this.x;
	this.y;
	
	this.turnSpeed = 5;
	this.thrustSpeed = 8;
	
	this.asset = assetMgr.assets['ship1'];
	
	this.sprite = this.asset;
	
	this.cacheCanvas = document.createElement('canvas');
    this.cacheCanvas.width = 80;
    this.cacheCanvas.height = 80;
		
	this.cacheContext = this.cacheCanvas.getContext('2d');
	
	this.heading = 0;
	this.prevHeading = 0;
	
}
Player.inheritsFrom( Entity );

Player.prototype.draw = function( screen )
{
	game.screen.drawImage( this.sprite, this.x, this.y, this.sprite.width, this.sprite.height );
}

Player.prototype.update = function()
{		
	// Rotate if heading changes
	if(this.heading != this.prevHeading){
		this.sprite = this.rotateAndCache(this.asset, this.heading);
	}
	this.prevHeading = this.heading;
	
	// Respond to key events
	this.checkInput();
}

Player.prototype.checkInput = function()
{
	// Right
	if( game.keys['39'] )
	{
		this.turnRight(this.turnSpeed);
	};
	
	// Left
	if( game.keys['37'])
	{	
		this.turnLeft(this.turnSpeed);
	}; 

	// Thrust
	if( game.keys['32'] || game.keys['38'])
	{		
		this.thrust(this.thrustSpeed);
	}
}

Player.prototype.setLocation = function( x, y, center ) 
{
	this.x = (center) ? (x - this.asset.width/2) : x;
	this.y = (center) ? (y - this.asset.height/2) : y;
}

Player.prototype.turnRight = function( speed )
{
	var heading = this.heading + speed;
	this.heading = ( heading < 360) ? heading : 0;
}

Player.prototype.turnLeft = function( speed )
{
	var heading = this.heading - speed;
	this.heading = ( heading > 0) ? heading : 360 - Math.abs(heading);
}

Player.prototype.thrust = function( speed )
{	
	var x = this.x + speed * Math.sin(this.heading * Math.PI/180);
    var y = this.y - speed * Math.cos(this.heading * Math.PI/180);
	
	if(game.currentLevel.isWithinBoundary(x,y) && game.currentLevel.isWithinBoundary(x + 80,y + 80)){
		this.setLocation(x,y);
	}
}

Player.prototype.rotateAndCache = function(image, angle) 
{	
	this.cacheContext.clearRect(0, 0, 80, 80);
    this.cacheContext.save();
    this.cacheContext.translate(40, 40);
	
	var angleInRad = angle * (Math.PI/180);
	
	// radians
    this.cacheContext.rotate(angleInRad);
    this.cacheContext.translate(0,0);
    this.cacheContext.drawImage(image, -40, -40);
    this.cacheContext.restore();

    return this.cacheCanvas;
}
