Modules.TouchEvents = (function() {

  function initKeyEvents(keyList, keyType) {
    var noteValues = Modules.Data.getNotesMatrix()[keyType];
    var color = (keyType === 'majors') ? 0xE8E3CC:0x000000;
    var octaveAmount = (keyType === 'majors') ? 7:5;

    var initCursorEvents = function(singleKey, index) {
      var octave = Math.floor(index / 7);
      var octaveIndex = index % octaveAmount;
      singleKey.addEventListener('cursordown', function() {
        var octaveOffset = Modules.Effects.getOctaveOffset();
        singleKey.rotation.x += 0.04;
        singleKey.material.color.setHex(0xBA1A1A);
        Modules.Effects.playSignal(noteValues[octave + octaveOffset][octaveIndex]);
      });

      singleKey.addEventListener('cursorup', function() {
        singleKey.rotation.x -= 0.04;
        singleKey.material.color.setHex(color);
        Modules.Effects.stopSignal();
      });

      singleKey.addEventListener('cursorleave', function() {
        singleKey.rotation.x = 0;
        singleKey.material.color.setHex(color);
        var musicSignal = Modules.Effects.getSignal();
        Modules.Effects.stopSignal();
      });
    }

    for (var i = 0; i < keyList.length; i++) {
      initCursorEvents(keyList[i], i);
    }
  }

  function initSlider(threeCube, effect, xIndex) {
    threeCube.addEventListener('cursorup', function() {
      Modules.Effects[effect](threeCube.position.x - xIndex);
    });
    threeCube.addEventListener('cursorleave', function() {
      Modules.Effects[effect](threeCube.position.x - xIndex);
    });
  }

  function init(threeKeys) {
    initKeyEvents(threeKeys.majors, 'majors');
    initKeyEvents(threeKeys.minors, 'minors');
  }

  return {
    init: init,
    initSlider: initSlider,
  }


})();
