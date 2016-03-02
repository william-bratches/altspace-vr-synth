Modules.Effects = (function(){
  var signal = T('sin');
  var threeKeys = {};

  function getSignal() {
    return signal;
  }
  
  function initWaveForms() {
  	var sync = altspace.utilities.behaviors.Object3DSync()
  	var waveFormTypeButtons = new THREE.Group();
  	var waveForms = {
  		sin: Modules.ShapeMaker.createCube(100, "#33CCFF"),
  		saw: Modules.ShapeMaker.createCube(100, "#D90909"),
  	}
  	waveForms.sin.addBehaviors(sync);
  	waveForms.saw.addBehaviors(sync, waveForms.saw.translateY(200));
  	waveFormTypeButtons.add(waveForms.sin, waveForms.saw);
  	waveFormTypeButtons.translateX(-400);
  	sim.scene.add(waveFormTypeButtons);
  	return waveForms;
  }

  function initWaveFormEvents(waveForms) {
  	_.each(waveForms, function(waveForm, key) {
  		waveForm.addEventListener('cursordown', function() {
        signal = T(type);
  		});
  	});
  }

  function init(keys) {
    var waveforms = initWaveForms();
    initWaveFormEvents(waveforms);
    _.extend(threeKeys, keys);
    Modules.TouchEvents.init(threeKeys)
  }

  return {
    init: init,
    getSignal: getSignal
  }
})();
