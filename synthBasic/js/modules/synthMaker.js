Modules.SynthMaker = (function() {
  (function(){var a = window.altspace; (function insert(ss, t){for(var i in ss) {for (var j in ss[i]) {t[j] = ss[i][j];}};})([a, a.utilities,a.utilities.behaviors, a.utilities.shims], window.alt = {})})();

  var effectSliders = ['setAttack', 'setDecay', 'setSustain', 'setRelease'];

  function getEffectSliders() {
    return effectSliders;
  }

  function createKeyboard() {
    return Modules.OctaveMaker.createOctaveShape(3);
  };

  function setSignalType(type) {
    signal = T(type);
  };

  function createSlider(xIndex, effect, color) {
    var controller = new THREE.Group();
    var cube = Modules.ShapeMaker.createControlSlider(color);
    var backing = Modules.ShapeMaker.createBacking();
    controller.add(cube, backing);
    controller.translateX(xIndex);
    sim.scene.add(controller);
    Modules.touchEvents.initSlider(cube, effect);

    // return the part relevant for event handlers.
    return cube;
  }

  function createSynth() {
    var keys =  createKeyboard();
  	Modules.Effects.init(keys);
  	return keys;
  }

  return {
    getEffectSliders: getEffectSliders,
    createSlider: createSlider,
    createSynth: createSynth,
    setSignalType: setSignalType,
  }
})();
