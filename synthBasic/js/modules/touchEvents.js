Modules.touchEvents = (function() {

  function initWhiteKeyEvents(majors, signal) {
    var initCursorEvents = function(singleKey, index, musicSignal) {
      // pitch values corresponding to white key values. index 0 is F major
      var noteValues = [174.61, 196, 220, 246.94, 261.63, 293.67, 329.63, 349.23];

      singleKey.addEventListener('cursordown', function() {
        singleKey.rotation.x += 0.04;
        singleKey.material.color.setHex(0xBA1A1A);
        console.log(noteValues[index]);
        musicSignal.set({ freq: noteValues[index]}).play();
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
    var initCursorEvents = function(singleKey) {
      singleKey.addEventListener('cursordown', function() {
        singleKey.rotation.x += 0.04;
        singleKey.material.color.setHex(0xBA1A1A);
      });

      singleKey.addEventListener('cursorup', function() {
        singleKey.rotation.x -= 0.04;
        singleKey.material.color.setHex(0x000000);
      });
    }

    for (var i = 0; i < minors.length; i++) {
      initCursorEvents(minors[i]);
    }
  }


})();
