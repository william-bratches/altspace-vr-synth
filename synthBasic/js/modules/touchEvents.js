Modules.touchEvents = (function() {

  function initWhiteKeyEvents(majors, signal) {
    var noteMatrix = Modules.Data.getMajorNotesMatrix();

    var initCursorEvents = function(singleKey, index, musicSignal) {
      var octave = Math.floor(index / 7);
      var octaveKey = index % 7;
      singleKey.addEventListener('cursordown', function() {
        singleKey.rotation.x += 0.04;
        singleKey.material.color.setHex(0xBA1A1A);
        musicSignal.set({ freq: noteValues[octave][octaveIndex]}).play();
      });

      singleKey.addEventListener('cursorup', function() {
        singleKey.rotation.x -= 0.04;
        singleKey.material.color.setHex(0xE8E3CC);
        musicSignal.pause();
      });
    }

    for (var i = 0; i < majors.length; i++) {
      initCursorEvents(majors[i], i, signal);
    }
  }

  function initBlackKeyEvents(minors, signal) {
    var octave = Math.floor(index / 7);
    var octaveKey = index % 5;
    var initCursorEvents = function(singleKey, index, musicSignal) {
      singleKey.addEventListener('cursordown', function() {
        singleKey.rotation.x += 0.04;
        singleKey.material.color.setHex(0xBA1A1A);
        musicSignal.set({ freq: noteValues[octave][octaveIndex]}).play();
      });

      singleKey.addEventListener('cursorup', function() {
        singleKey.rotation.x -= 0.04;
        singleKey.material.color.setHex(0x000000);
        musicSignal.pause();
      });
    }

    for (var i = 0; i < minors.length; i++) {
      initCursorEvents(minors[i], i, signal);
    }
  }

  function clearEvents() {
    var clear = function(keys) {
      _.each(keys, function(key) {
        key.removeEventListener('cursordown');
        key.removeEventListener('cursorup')
      });
    }
  }

  function init(signal, threeKeys) {
    clearEvents();
    initWhiteKeyEvents(threeKeys.major, signal);
    initWhiteKeyEvents(threeKeys.minor, signal);
  }

  return {
    clearEvents: clearEvents,
    init: init,
  }


})();
