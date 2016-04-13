var assetMgr = new AssetManager();
var viewport = new ViewPort("screen", 800, 600);
var game = new GameEngine(viewport);

window.onload = function()
{
	// Show loading
	game.showLoadingScreen();

	// Load all images
	assetMgr.loadAssets(function(){

		// Load all sounds
		assetMgr.loadSounds( function()
		{
			// Set the map
			game.createLevel("1");

			// Create a player
			game.createPlayer();

			// Create the camera
			game.createCamera(viewport);

			// Start the game
			game.start();

			// Play level music
			assetMgr.sounds['music3'].play();

		});

	});

};