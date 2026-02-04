function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p> 제목: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

function photoDiv(p) {
  return [
      "<div>",
      `<p>제목: ${p.title}</p>`,
      emitPhotoData(p),
      "</div>'"
  ].join("\n");
}

function emitPhotoData(p) {
  const result = [];
  result.push(`<p>위치: ${p.location}</p>`);
  result.push(`<p>날짜: ${p.date.toDateString()}</p>`);
  return result.join("\n");
}