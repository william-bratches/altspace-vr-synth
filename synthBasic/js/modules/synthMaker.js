Modules.SynthMaker = (function() {
  (function(){var a = window.altspace; (function insert(ss, t){for(var i in ss) {for (var j in ss[i]) {t[j] = ss[i][j];}};})([a, a.utilities,a.utilities.behaviors, a.utilities.shims], window.alt = {})})();

  function createKeyboard() {
    return Modules.OctaveMaker.createOctaveShape(3);
  };

  function setSignalType(type) {
    signal = T(type);
  };

  function createSynth() {
    var keys =  createKeyboard();
    var cube = Modules.ShapeMaker.createControlSlider();
    var backing = Modules.ShapeMaker.createBacking();
    var controller = new THREE.Group();
    controller.add(cube, backing);
    controller.translateZ(-100);
  	Modules.Effects.init(keys);
  	sim.scene.add(controller);
  	return cube;

  }

  return {
    createSynth: createSynth,
    setSignalType: setSignalType,
  }
})();
