/*
	Game Engine
*/
function GameEngine(viewport)
{
	this.entities = [];

	// Grab the viewport context
	this.viewport = viewport;
	this.screen = this.viewport.canvas.getContext("2d");

	this.scale = 1;

	this.currentLevel;
	this.currentPlayer;

	this.timer = new Timer();

	// Input
	this.click;
	this.mouse;
	this.keys = {};
	this.keysHistory = {};

}

GameEngine.prototype.start = function()
{
	// Game start
	console.log("starting game");

	var _this = this;

	this.startInput();

	// First draw
	(function gameLoop(){
		_this.loop();
		window.requestAnimFrame( gameLoop, _this.screen );
	})();
};

// Show loading screen
GameEngine.prototype.showLoadingScreen = function()
{
	var img = document.createElement("img");
	img.onload = function(screen)
	{
		return function()
		{
			screen.drawImage( this, 0, 0, 800, 600 );
		}

	}(this.screen);
	img.src = "assets/loading.jpg";
};

// Listen for user input
GameEngine.prototype.startInput = function()
{
	var _this = this;

	this.viewport.canvas.addEventListener("click", function(e){
		_this.click = { x : e.clientX, y : e.clientY };
	}, false);

	this.viewport.canvas.addEventListener("mousemove", function(e){
		_this.mouse = { x : e.clientX, y : e.clientY };
	}, false);

	document.addEventListener("keydown", function(e){

		// If the key isnt alreay being held
		if(!_this.keys[e.keyCode])
		{
			var lastPressedTime = new Date().getTime() - _this.keysHistory[e.keyCode];

			var doublePress = ( lastPressedTime < 200 );

			// Mark the key as pressed
			_this.keys[e.keyCode] = { ctrl : e.ctrlKey, shift : e.shiftKey, doublePress: doublePress };

			// Mark the keys history
			_this.keysHistory[e.keyCode] = new Date().getTime();
		}

	}, false);

	document.addEventListener("keyup", function(e){
		delete _this.keys[e.keyCode];
	}, false);

};

// Add new entities to loop
GameEngine.prototype.addEntity = function( entity )
{
	this.entities.push( entity );

	return entity;
};

// Update entities drawing
GameEngine.prototype.update = function()
{
	var entitiesLength = this.entities.length;

	for(var i = 0; i < entitiesLength; i++)
	{
		this.entities[i].update(this.screen);
	}
};

// Draw each entity to the screen
GameEngine.prototype.draw = function()
{
	this.screen.clearRect(0, 0, this.viewport.width, this.viewport.height);
    this.screen.save();

	var entitiesLength = this.entities.length;

	for(var i = 0; i < entitiesLength; i++)
	{
		this.entities[i].draw(this.screen);
	}

	this.screen.restore();
};

// Actual game loop
GameEngine.prototype.loop = function()
{
	this.clockTick = this.timer.tick();
	this.update();
	this.draw();
	this.click = null;
};

// Set the current player
GameEngine.prototype.setPlayer = function( player, number )
{
	this.currentPlayer = player;

	this.currentPlayer.setLocation(400, 300, true);
};

// Create a player
GameEngine.prototype.createPlayer = function( )
{
	// Create a new player
	var player = game.addEntity( new Player() );

	this.setPlayer( player, 1);
};

// Create a level
GameEngine.prototype.createLevel = function( id )
{
	var level = game.addEntity( new Level( id ) );

	this.setLevel( level );
};

// Set the current level
GameEngine.prototype.setLevel = function( level )
{
	this.currentLevel = level;
};

GameEngine.prototype.createCamera = function() {
	this.camera = new Camera(this.viewport)
}