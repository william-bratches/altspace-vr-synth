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
  	Modules.Effects.init(keys);
    var cube = Modules.ShapeMaker.createCube(100);
  	cube.addBehaviors(
  		alt.Object3DSync(),
  		alt.Drag({x: {min: -30, max: 30}, y: true})
  	);

  	sim.scene.add(cube);
  	return cube;

  }

  return {
    createSynth: createSynth,
    setSignalType: setSignalType,
  }
})();
