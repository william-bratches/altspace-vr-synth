Modules.OctaveMaker = (function() {
  function createOctaveShape(receivedSignal, index) {
  	var sync = altspace.utilities.behaviors.Object3DSync()
  	var index = index || 0;
  	var octave = new THREE.Group();

  	var createBase = function(octaveGroup) {
  		var base = Modules.ShapeMaker.createOctaveBase();
  		base.translateX(66);
  		octaveGroup.add(base);
  	}

  	var createWhiteKeys = function(octaveGroup) {
  		var majorKeys = [];
  		for (var i = 0; i < 7; i++) {
  			var whiteKey = Modules.ShapeMaker.createWhiteKey(i);
  			whiteKey.addBehaviors(sync);
  			whiteKey.translateX(i * 22);
  			octaveGroup.add(whiteKey);
  			majorKeys.push(whiteKey);
  		}
  		return majorKeys;
  	}

  	var initWhiteKeyEvents= function(majors, signal) {

  		var initCursorEvents = function(singleKey, index, musicSignal) {
  			// pitch values corresponding to white key values. index 0 is F major
  			var noteValues = [174.61, 196, 220, 246.94, 261.63, 293.67, 329.63, 349.23];

  			singleKey.addEventListener('cursordown', function() {
  				singleKey.rotation.x += 0.04;
  				singleKey.material.color.setHex(0xBA1A1A);
  				console.log(noteValues[index]);
  				musicSignal.set({ freq: noteValues[index]}).play();
  			});

  			singleKey.addEventListener('cursorup', function() {
  				singleKey.rotation.x -= 0.04;
  				singleKey.material.color.setHex(0xE8E3CC);
  				musicSignal.pause();
  			});
  		}

  		for (var i = 0; i < majors.length; i++) {
  			initCursorEvents(majors[i], i, signal);
  		}
  	}

  	var createBlackKeys = function(octaveGroup) {
  		var minorKeys = [];
  		for (var i = 0; i < 6; i++) {
  			// skip 3rd key between E and F white keys
  			if (i !== 3) {
  				var blackKey = Modules.ShapeMaker.createBlackKey(i);
  				blackKey.addBehaviors(sync);
  				blackKey.translateX(i * 22);
  				octaveGroup.add(blackKey);
  				minorKeys.push(blackKey);
  			}
  		}
  		return minorKeys;
  	}

  	var initBlackKeyEvents = function(minors, signal) {
  		var initCursorEvents = function(singleKey) {
  			singleKey.addEventListener('cursordown', function() {
  				singleKey.rotation.x += 0.04;
  				singleKey.material.color.setHex(0xBA1A1A);
  			});

  			singleKey.addEventListener('cursorup', function() {
  				singleKey.rotation.x -= 0.04;
  				singleKey.material.color.setHex(0x000000);
  			});
  		}

  		for (var i = 0; i < minors.length; i++) {
  			initCursorEvents(minors[i]);
  		}
  	}

  	// TODO - create arbitrary number of octaves based on index parameter
  	var main = function() {
  		var majors = createWhiteKeys(octave);
  		var minors = createBlackKeys(octave);
  		createBase(octave);
  		initWhiteKeyEvents(majors, receivedSignal);
  		initBlackKeyEvents(minors);
  		sim.scene.add(octave)
  		octave.translateY(-220);
  	}
  	main();
  }
})();
