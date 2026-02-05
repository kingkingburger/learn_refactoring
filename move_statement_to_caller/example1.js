function renderPerson(outStream, person){
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  zztmp(outStream, p);
  outStream.write(`<p>위치: ${p.location}`)
}

function listRecentPhotos(outStream, photos){
  photos
  .filter(p => p.date > recentDateCutoff())
  .forEach(p => {
    outStream.write("<div>\n");
    zztmp(outStream, p);
    outStream.write(`<p>위치: ${p.location}`)
    outStream.write("</div>\n");
  })
}

function zztmp(outStream, p) {
  outStream.write(`<p>${p.name}</p>\n`);
  outStream.write(`<p>날짜: ${p.date.toDateString()}</p>\n`);
}