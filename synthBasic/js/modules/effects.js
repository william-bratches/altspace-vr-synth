Modules.Effects = (function(){
  var currentSignal = T('saw');
  var asdr =T("adsr", {a:0, d:0, s:0, r:500}, currentSignal).play();
  var octaveOffset = 2;
  var threeKeys = {};
  var release = 500;
  var asdr = {
    values: {
      a: 0,
      d: 0,
      s: 0,
      r: 0,
    }

    setAttack: function (val) {
      var amount = val * 100;
      this.values.a = amount;
    },

    play: T("adsr", this.values, currentSignal).play();
  }

  // will later be able to arbitrarily determine octave
  function getOctaveOffset() {
    return octaveOffset;
  }

  function getSignal() {
    return currentSignal;
  }

  function playSignal(freq) {
    var octaveOffset = getOctaveOffset();
    currentSignal.set({freq: freq});
    asdr.play.bang();
  }

  function setReverb(val) {
    currentSignal = T(currentWaveForm);
    var mix = val / 100;
    currentSignal = T("reverb", {room: 1, damp: 0.45, mix: mix}, currentSignal)
  }

  function setMul(val) {
    currentSignal.mul = val / 10;
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
        currentWaveForm = key;
        currentSignal = T(key);
  		});
  	});
  }

  function init(keys, controlSlider) {
    var waveforms = initWaveForms();
    initWaveFormEvents(waveforms);
    _.extend(threeKeys, keys);
    Modules.TouchEvents.init(threeKeys, controlSlider)
  }

  return {
    init: init,
    getSignal: getSignal,
    playSignal: playSignal,
    getOctaveOffset: getOctaveOffset,
    setReverb: setReverb,
  }
})();
