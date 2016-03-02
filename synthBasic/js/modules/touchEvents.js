Modules.TouchEvents = (function() {

  function initWhiteKeyEvents(majors, signal) {
    var noteValues = Modules.Data.getMajorNotesMatrix();

    var initCursorEvents = function(singleKey, index, musicSignal) {
      var octave = Math.floor(index / 7);
      var octaveIndex = index % 7;
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
    var noteValues = Modules.Data.getMinorNotesMatrix();

    var initCursorEvents = function(singleKey, index, musicSignal) {
      var octave = Math.floor(index / 7);
      var octaveIndex = index % 5;
      singleKey.addEventListener('cursordown', function() {
        singleKey.rotation.x += 0.04;
        singleKey.material.color.setHex(0xBA1A1A);
        musicSignal.set({ freq: noteValues[octave][octaveIndex]}).play();
      });

      singleKey.addEventListener('cursorup', function() {
        singleKey.rotation.x -= 0.04;
        singleKey.material.color.setHex(0xffffff);
        musicSignal.pause();
      });
    }

    for (var i = 0; i < minors.length; i++) {
      initCursorEvents(minors[i], i, signal);
    }
  }

  function clearEvents(threeKeys) {
    var clear = function(keys) {
      _.each(keys, function(key) {
        key.removeEventListener('cursordown');
        key.removeEventListener('cursorup')
      });
    }
    clear(threeKeys.major);
    clear(threeKeys.minor);
  }

  function init(signal, threeKeys) {
    clearEvents(threeKeys);
    initWhiteKeyEvents(threeKeys.majors, signal);
    initWhiteKeyEvents(threeKeys.minors, signal);
  }

  return {
    clearEvents: clearEvents,
    init: init,
  }


})();
