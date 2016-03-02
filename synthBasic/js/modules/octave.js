Modules.OctaveMaker = (function() {
  function createOctaveShape(amount) {
  	var sync = altspace.utilities.behaviors.Object3DSync()
  	var amount = amount || 1;
  	var octave = new THREE.Group();

  	var createBase = function(octaveGroup, widthMultiplier) {
  		var base = Modules.ShapeMaker.createOctaveBase(widthMultiplier);
  		base.translateX(73 * (widthMultiplier));
  		octaveGroup.add(base);
  	}

  	var createWhiteKeys = function(octaveGroup) {
  		var majorKeys = [];
  		for (var i = 0; i < 7 * amount; i++) {
  			var whiteKey = Modules.ShapeMaker.createWhiteKey(i);
  			whiteKey.addBehaviors(sync);
  			whiteKey.translateX(i * 22);
  			octaveGroup.add(whiteKey);
  			majorKeys.push(whiteKey);
  		}
  		return majorKeys;
  	}

  	var createBlackKeys = function(octaveGroup) {
  		var minorKeys = [];

      var blackKeysAlgo = function(index) {
        var render = true;
        var currentRegister = Math.floor(index % 7)
        return (currentRegister % 7 !==0) && (currentRegister % 4 !== 0);
      }
      
  		for (var i = 1; i <= (7 * amount); i++) {
  			// skip 3rd key between E and F white keys
  			if (blackKeysAlgo(i)) {
  				var blackKey = Modules.ShapeMaker.createBlackKey(i);
  				blackKey.addBehaviors(sync);
  				blackKey.translateX((i - 1) * 22); // i-1 is because I screwed up the math herp derp
  				octaveGroup.add(blackKey);
  				minorKeys.push(blackKey);
  			}
  		}
  		return minorKeys;
  	}

  	var main = function() {
  		var majors = createWhiteKeys(octave);
  		var minors = createBlackKeys(octave);
  		createBase(octave, amount);
  		sim.scene.add(octave)
  		octave.translateY(-220);
      return {majors: majors, minors: minors};
  	}
  	return main();
  }

  return {
    createOctaveShape: createOctaveShape,
  }
})();
