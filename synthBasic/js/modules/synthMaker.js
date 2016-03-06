Modules.SynthMaker = (function() {
  (function(){var a = window.altspace; (function insert(ss, t){for(var i in ss) {for (var j in ss[i]) {t[j] = ss[i][j];}};})([a, a.utilities,a.utilities.behaviors, a.utilities.shims], window.alt = {})})();

  function createKeyboard() {
    return Modules.OctaveMaker.createOctaveShape(3);
  };

  function setSignalType(type) {
    signal = T(type);
  };

  function createSlider(zIndex) {
    var controller = new THREE.Group();
    var cube = Modules.ShapeMaker.createControlSlider();
    var backing = Modules.ShapeMaker.createBacking();
    controller.add(cube, backing);
    controller.translateZ(zIndex);
    sim.scene.add(controller);

    // return the part relevant for event handlers.
    return cube;
  }

  function createSynth() {
    var keys =  createKeyboard();
    var attack = createSlider(-100);
    var effectSliders = {
      setAttack: attack,
    }
  	Modules.Effects.init(keys, effectSliders);
  	return attack;
  }

  return {
    createSynth: createSynth,
    setSignalType: setSignalType,
  }
})();
