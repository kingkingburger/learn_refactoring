function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

function photoDiv(p) {
  return [
      "<div>",
      emitPhotoData(p),
      "</div>'"
  ].join("\n");
}

function emitPhotoData(p) {
  return [
      `<p>제목: ${p.title}</p>`,
      `<p>위치: ${p.location}</p>`,
      `<p>날짜: ${p.date.toDateString()}</p>`,
  ].join("\n");
}

// 중복된 동작을 뽑아서 함수에 넣기
// 이건 단계없이 직관적으로 알 수 있을 것 같다