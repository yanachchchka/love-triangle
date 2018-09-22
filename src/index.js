/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  var answer = 0;
  for (var i = 0; i < preferences.length; i++) {
    var a = i+1;
    var b = preferences[a-1];
    var c = preferences[b-1];
    var d = preferences[c-1];

    if (a==d && a!=b && b!=c){
      answer++;
      
      preferences[a-1] = -1;
      preferences[b-1] = -1;
      preferences[c-1] = -1;
    }
  }
  return answer;
};
