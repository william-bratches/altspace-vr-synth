Modules.ShapeMaker = (function() {
  function createCube(scale, color) {
    var scaler = scale || 50;
    var color = color || '#ffffff'
    var materialCreator = new THREE.MTLLoader.MaterialCreator();
  	var geometry = new THREE.BoxGeometry(1, 1, 1);
  	var material = new THREE.MeshBasicMaterial({color: color});
  	var cube = new THREE.Mesh(geometry, material);
    materialCreator.crossOrigin = 'anonymous';
    cube.scale.multiplyScalar(scaler);
    return cube;
  }
  return {
    createCube: createCube,
  }
})();
