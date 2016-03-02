Modules.SynthMaker = (function() {

  function createKeyboard() {
    return Modules.OctaveMaker.createOctaveShape(3);
  };

  function createSynth() {
    return createKeyboard();
  	// var waveforms = initWaveForms();
  	// var signal = initWaveFormEvents(waveforms);
  }

  return {
    createSynth: createSynth,
  }
})();
