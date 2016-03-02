Modules.Data = (function() {

  function getMajorNotesMatrix() {
    // starts at F for each octave
    var matrix = [
      [43.654, 48.999, 55, 61.735, 65.406,73.416, 82.407],
      [87.307, 97.999, 110, 123.47, 130.81, 146.83, 164.81],
      [174.61, 196, 220, 246.94, 261.63, 293.67, 329.63],
      [349.23, 392, 440, 493.88, 523.25, 587.33, 659.26],
      [698.46, 783.99, 880, 987.77, 1046.5, 1174.7, 1318.5],
      [1396.9, 1568, 1760, 1975.5, 2093, 2349.3, 2637]
    ]
    return matrix;
  }

  function getMinorNotesMatrix() {
    var matrix = [
      [46.249, 51.913, 58.270, 69.296, 77.782],
      [92.499, 103.83, 116.54, 138.59, 155.56],
      [185, 207.65, 233.08, 277.18, 311.13],
      [369.99, 415.30, 466.16, 554.37, 622.25],
      [739.99, 830.61, 932.33, 1108.7, 1244.5],
      [1480, 1661.2, 1864.7, 2217.5, 2489.0]
    ]
    return matrix;
  }

  function getNotesMatrix() {
    return {majors: getMajorNotesMatrix(), minors: getMinorNotesMatrix()};
  }

  return {
    getNotesMatrix: getNotesMatrix,
  }
})();
