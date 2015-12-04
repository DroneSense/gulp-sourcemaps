function relativePathTo(target, source) {
  var sourceParts = (source || '').split('/');
  var targetParts = (target || '').split('/');
  var sLen = sourceParts.length;
  var tLen = targetParts.length;
  
  var iRoot = 0;
  while (sourceParts[iRoot] === targetParts[iRoot] && iRoot < sLen && iRoot < tLen) {
    iRoot++;
  }
   
  var offset = sLen - iRoot;

  var path = new Array(offset).join('../')
    + targetParts.slice(iRoot).join('/');
   
  return path;
}

module.exports = {
    relativePathTo: relativePathTo
};