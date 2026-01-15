// 변수를 읽는 곳, 값을 수정하는 곳에서 사용하는 변수는 캡슐화 하자
let _title = "untitled";

// const result = `<h1>{tpHd}</h1>`;
//
// tphd = obj['ariticleTitle'];

export function title() {return _title}
export function setTitle(arg) {_title = arg;}


const result = `<h1>{title()}</h1>`;

setTitle(obj['ariticleTitle']);
