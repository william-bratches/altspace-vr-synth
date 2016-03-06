Modules.ShapeMaker = (function() {
  (function(){var a = window.altspace; (function insert(ss, t){for(var i in ss) {for (var j in ss[i]) {t[j] = ss[i][j];}};})([a, a.utilities,a.utilities.behaviors, a.utilities.shims], window.alt = {})})();
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

  function createOctaveBase(widthMultiplier) {
    var color = '#141414';
    var geometry = new THREE.BoxGeometry(7.8 * widthMultiplier, 0.8, 6);
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

  function createBacking(color) {
    var color = color || '#4A4A4A';
    var geometry = new THREE.BoxGeometry(6, 1, 1);
    var material = new THREE.MeshPhongMaterial({color: color});
    var backing = new THREE.Mesh(geometry, material);
    backing.scale.multiplyScalar(20);
    backing.translateX(50);
    return backing;
  }

  return {
    createBacking: createBacking,
    createBlackKey: createBlackKey,
    createOctaveBase: createOctaveBase,
    createWhiteKey: createWhiteKey,
    createCube: createCube,
  }
})();
