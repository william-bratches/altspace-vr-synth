Modules.SynthMaker = (function() {
  (function(){var a = window.altspace; (function insert(ss, t){for(var i in ss) {for (var j in ss[i]) {t[j] = ss[i][j];}};})([a, a.utilities,a.utilities.behaviors, a.utilities.shims], window.alt = {})})();

  var attack = createSlider(0);
  var decay = createSlider(200);
  var sustain = createSlider(400);
  var release = createSlider(600);
  var effectSliders = {
    setAttack: attack,
    setDecay: decay,
    setSustain: sustain,
    setRelease: release,
  }

  function getEffectSliders() {
    return effectSliders;
  }

  function createKeyboard() {
    return Modules.OctaveMaker.createOctaveShape(3);
  };

  function setSignalType(type) {
    signal = T(type);
  };

  function createSlider(xIndex, color) {
    var controller = new THREE.Group();
    var cube = Modules.ShapeMaker.createControlSlider(color);
    var backing = Modules.ShapeMaker.createBacking();
    controller.add(cube, backing);
    controller.translateX(xIndex);
    sim.scene.add(controller);

    // return the part relevant for event handlers.
    return cube;
  }

  function createSynth() {
    var keys =  createKeyboard();
  	Modules.Effects.init(keys);
  	return attack;
  }

  return {
    getEffectSliders: getEffectSliders,
    createSlider: createSlider,
    createSynth: createSynth,
    setSignalType: setSignalType,
  }
})();
