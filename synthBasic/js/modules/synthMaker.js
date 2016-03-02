Modules.SynthMaker = (function() {
  function createSynth() {
  	var waveforms = initWaveForms();
  	var signal = initWaveFormEvents(waveforms);
  }

  return {
    createSynth: createSynth,
  }
})();
