<!DOCTYPE html>
<html>

	<head>
		<title>Space</title>
			
		<script src="js/soundmanager2.js"></script>
		<script src="js/core.js"></script>
		<script src="js/viewport.js"></script>
		<script src="js/timer.js"></script>
		<script src="js/game.js"></script>
		<script src="js/entity.js"></script>
		<script src="js/assetMgr.js"></script>
		<script src="js/animation.js"></script>
		<script src="js/player.js"></script>
		<script src="js/level.js"></script>
		
	</head>

	<body bgcolor="black">

		<canvas id="screen" width="800" height="600" style="border: 1px solid gray"></canvas>
		
		<script>
			
			var assetMgr = new AssetManager();
			var game = new GameEngine();
			
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
						
						// Start the game
						game.start();
						
						// Play level music						
						//assetMgr.sounds['music3'].play({ loops: 1});
					
					});
					
				});
			}

		</script>
		
	</body>

</html>