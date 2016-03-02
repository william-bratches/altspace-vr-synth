Modules.Effects = (function(){
  var signal = T('sin');
  var threeKeys = {};

  function getSignal() {
    return signal;
  }

  function setSignal(type) {
      signal = T(type);
      Modules.TouchEvents.init(signal, threeKeys);
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
        setSignal(key);
  		});
  	});
  }

  function init(keys) {
    var waveforms = initWaveForms();
    initWaveFormEvents(waveforms);
    _.extend(threeKeys, keys);
    console.log(threeKeys)
    Modules.TouchEvents.init(signal, threeKeys)
  }

  return {
    init: init,
    getSignal: getSignal
  }
})();
