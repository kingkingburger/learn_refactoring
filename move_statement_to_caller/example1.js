function renderPerson(outStream, person){
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos){
  photos
  .filter(p => p.date > recentDateCutoff())
  .forEach(p => {
    outStream.write("<div>\n");
    emitPhotoData(outStream, p);
    outStream.write("</div>\n");
  })
}

function emitPhotoData(outStream, p) {
  zztmp(outStream, p);
  outStream.write(`<p>위치: ${p.location}`)
}
function zztmp(outStream, p) {
  outStream.write(`<p>${p.name}</p>\n`);
  outStream.write(`<p>날짜: ${p.date.toDateString()}</p>\n`);
}