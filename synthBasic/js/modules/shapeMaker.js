Modules.ShapeMaker = (function() {
  var materialCreator = new THREE.MTLLoader.MaterialCreator();
  materialCreator.crossOrigin = 'anonymous';


  function createCube(scale, color) {
    var scaler = scale || 50;
    var color = color || '#ffffff';
  	var geometry = new THREE.BoxGeometry(1, 1, 1);
  	var material = new THREE.MeshBasicMaterial({color: color});
  	var cube = new THREE.Mesh(geometry, material);
    cube.scale.multiplyScalar(scaler);
    return cube;
  }

  function createWhiteKey() {
    var color = '#E8E3CC';
    var geometry = new THREE.BoxGeometry(1, 1, 5);
    var material = new THREE.MeshLambertMaterial({color: color});
    var whiteKey = new THREE.Mesh(geometry, material);
    whiteKey.scale.multiplyScalar(20);
    return whiteKey;
  }

  function createOctaveBase() {
    var color = '#141414';
    var geometry = new THREE.BoxGeometry(8, 0.8, 6);
    var material = new THREE.MeshBasicMaterial({color: color});
    var octaveBase = new THREE.Mesh(geometry, material);
    octaveBase.scale.multiplyScalar(20);
    return octaveBase;
  }

  function createBlackKey() {
    var color = '#000000';
    var geometry = new THREE.BoxGeometry(0.5, 1.5, 3);
    var material = new THREE.MeshPhongMaterial({color: color});
    var blackKey = new THREE.Mesh(geometry, material);
    blackKey.scale.multiplyScalar(20);
    blackKey.translateX(11);
    blackKey.translateZ(-15);
    return blackKey;
  }

  return {
    createBlackKey: createBlackKey,
    createOctaveBase: createOctaveBase,
    createWhiteKey: createWhiteKey,
    createCube: createCube,
  }
})();
