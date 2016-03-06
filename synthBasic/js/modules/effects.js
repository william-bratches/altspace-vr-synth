Modules.Effects = (function(){
  var currentSignal = T('sin');
  var octaveOffset = 2;
  var threeKeys = {};
  var release = 500;

  function getSignal() {
    return currentSignal;
  }

  // will later be able to arbitrarily determine octave
  function getOctaveOffset() {
    return octaveOffset;
  }

  function setPhaser(val) {
    currentSignal = T("eq", {params:{lf:[800, 0.5, -2], mf:[6400, 0.5, 4]}}, currentSignal);
    currentSignal = T("phaser", {freq:880, Q:2, steps:4}, currentSignal);
    currentSignal = T("delay", {time:"BPM60 L16", fb:0.65, mix:0.25}, currentSignal);

  }

  function setMul(val) {
    currentSignal.mul = val;
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
        currentSignal = T(key);
  		});
  	});
  }

  function init(keys, controlSlider) {
    var waveforms = initWaveForms();
    initWaveFormEvents(waveforms);
    _.extend(threeKeys, keys);
    Modules.TouchEvents.init(threeKeys)
    Modules.TouchEvents.initPhaser(controlSlider);
  }

  return {
    init: init,
    getSignal: getSignal,
    getOctaveOffset: getOctaveOffset,
    setMul: setMul,
    setPhaser: setPhaser,
  }
})();
