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
    var control = Modules.ShapeMaker.createControlSlider();
    var controller = new THREE.Group();
    control.slider.addBehaviors(
      alt.Object3DSync(),
      alt.Drag()
    );
    // controller.add(control.slider, control.backing);
    sim.scene.add(control.slider)
  }

  return {
    createSynth: createSynth,
    setSignalType: setSignalType,
  }
})();
