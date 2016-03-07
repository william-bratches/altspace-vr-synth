Modules.Effects = (function(){
  var currentSignal = T('saw');
  var octaveOffset = 2;
  var threeKeys = {};
  var asdrPlay;
  var release = 500;

  // attack decay sustain release
  var asdr = {
    values: {
      a: 1,
      d: 1,
      s: 1,
      r: 1,
    },
    setAttack: function (val) {
      var amount = val * 100;
      asdr.values.a = amount;
    },
    setDecay: function (val) {
      var amount = val * 100;
      asdr.values.d = amount;
    },
    setSustain: function (val) {
      var amount = val / 100;
      asdr.values.s = amount;
    },
    setRelease: function (val) {
      var amount = val * 100;
      asdr.values.r = amount;
    },
  }

  function setOsc() {

  }

  // will later be able to arbitrarily determine octave
  function getOctaveOffset() {
    return octaveOffset;
  }

  function getSignal() {
    return currentSignal;
  }

  function playSignal(freq) {
    var momentSignal = currentSignal;
    momentSignal.set({freq: freq});
    asdrPlay = T("adsr", asdr.values, momentSignal);
    asdrPlay.play().bang();
  }

  function stopSignal() {
    asdrPlay.release();
    asdrPlay = '';
  }

  // wip not working too great
  function setReverb(val) {
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

  // this is a bit messy - partially initialized here, partially initialzed in
  // touchEvents
  // need to clarify what the initialization flow is
  function init(keys, effects) {
    var waveforms = initWaveForms();
    initWaveFormEvents(waveforms);
    _.extend(threeKeys, keys);
    Modules.TouchEvents.init(threeKeys, effects)
  }

  return {
    init: init,
    getSignal: getSignal,
    playSignal: playSignal,
    stopSignal: stopSignal,
    getOctaveOffset: getOctaveOffset,
    setOsc: setOsc,
    setReverb: setReverb,
    setAttack: asdr.setAttack,
    setDecay: asdr.setDecay,
    setSustain: asdr.setSustain,
    setRelease: asdr.setRelease,
  }
})();
