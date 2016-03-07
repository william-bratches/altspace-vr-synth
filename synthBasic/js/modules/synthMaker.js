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

  function createSlider(args) {
    console.log(args);
    var knobColor = args.color || '#DADFE0';
    var cube = Modules.ShapeMaker.createCube(40, knobColor);
    var backing = Modules.ShapeMaker.createBacking();
    backing.translateX(args.xIndex);
    cube.position.x = args.xIndex;
    sim.scene.add(cube, backing);
    cube.addBehaviors(
      alt.Object3DSync(),
      alt.Drag({x: {min: args.xIndex, max: args.xIndex + 100}, y: true})
    );
    Modules.TouchEvents.initSlider(cube, args.effect);

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
