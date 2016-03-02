Modules.SynthMaker = (function() {
  function createKeyboard() {
    return Modules.OctaveMaker.createOctaveShape(3);
  };

  function setSignalType(type) {
    signal = T(type);
  };

  function createSynth() {
    var keys =  createKeyboard();
  	Modules.Effects.init(keys);
  }

  return {
    createSynth: createSynth,
    setSignalType: setSignalType,
  }
})();
