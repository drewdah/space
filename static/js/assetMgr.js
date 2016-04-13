/*	Asset Manager*/function AssetManager(){	this.assetQueue = [];	this.soundQueue = [];	this.assets = {};	this.sounds = {};	this.soundManager = {};}AssetManager.prototype.queueAsset = function( name, path ){	this.assetQueue.push({ 'name' : name, 'path' : path });};AssetManager.prototype.loadAssets = function( callback ){	// Load assets	this.queueAsset('ship1','assets/ship1.png');	this.queueAsset('background1','assets/bg_space_1.jpg');	var queueLength = this.assetQueue.length;	var loadedAssets = queueLength;	// Loaded asset callback	function assetLoaded()	{		loadedAssets--;		if(loadedAssets == 0)		{			callback();		}	}	// Loop through all the assets	for(var i = 0; i < queueLength; i++)	{		var asset = this.assetQueue[i];		this.assets[asset.name] = new Image();		this.assets[asset.name].src = asset.path;		this.assets[asset.name].onload = function(asset) {			return function(){				// Do something				console.log("loaded asset", asset.name);				assetLoaded();			}		}(asset);	}};// Queue a sound to be downloadedAssetManager.prototype.queueSound = function( name, path ){	this.soundQueue.push({ 'name' : name, 'path' : path });};AssetManager.prototype.loadSounds = function( callback ){	// Load sounds	this.queueSound('music3','sounds/music3.mp3');	this.queueSound('ship_thrust','sounds/ship_thrust_loop.wav');	var queueLength = this.soundQueue.length;	var loadedSounds = queueLength;	// Loaded sound callback	function soundLoaded()	{		loadedSounds--;		if(loadedSounds == 0)		{			callback();		}	}	var _this = this;	// Loop through all the sounds	for(var i = 0; i < queueLength; i++)	{		var sound = _this.soundQueue[i];		_this.sounds[sound.name] = new Howl({			src: [sound.path],			loop: true,			onload: function(sound) {				return function()				{					console.log("loaded sound " + sound.name);					soundLoaded();				}			}(sound)		});	}};