Modules.TouchEvents = (function() {

  function initKeyEvents(keyList, keyType) {
    var noteValues = Modules.Data.getNotesMatrix()[keyType];
    var color = (keyType === 'majors') ? 0xE8E3CC:0x000000;
    var octaveAmount = (keyType === 'majors') ? 7:5;
    var initCursorEvents = function(singleKey, index) {
      var octave = Math.floor(index / 7);
      var octaveIndex = index % octaveAmount;
      singleKey.addEventListener('cursordown', function() {
        singleKey.rotation.x += 0.04;
        singleKey.material.color.setHex(0xBA1A1A);
        var musicSignal = Modules.Effects.getSignal();
        musicSignal.set({ freq: noteValues[octave][octaveIndex]}).play();
      });

      singleKey.addEventListener('cursorup', function() {
        singleKey.rotation.x -= 0.04;
        singleKey.material.color.setHex(color);
        var musicSignal = Modules.Effects.getSignal();
        musicSignal.pause();
      });
    }

    for (var i = 0; i < keyList.length; i++) {
      initCursorEvents(key[i], i, signal);
    }
  }

  function init(threeKeys) {
    clearEvents(threeKeys);
    initKeyEvents(threeKeys.majors, 'majors');
    initKeyEvents(threeKeys.minors, 'minors');
  }

  return {
    clearEvents: clearEvents,
    init: init,
  }


})();
