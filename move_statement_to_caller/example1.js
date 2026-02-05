function renderPerson(outStream, person){
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos){
  photos
  .filter(p => p.date > recentDateCutoff())
  .forEach(p => {
    outStrea.write("<div>\n");
    emitPhotoData(outStream, p);
    outStream.write("</div>\n");
  })
}

function emitPhotoData(outStream, p) {
  return [
    `<p>제목: ${p.title}</p>`,
    `<p>위치: ${p.location}</p>`,
    `<p>날짜: ${p.date.toDateString()}</p>`,
  ].join("\n");
}