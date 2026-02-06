//before

let appliesToMass = false;
for(const s of states) {
  if (s === "MA") appliesToMass = true;
}

//after

appliesToMass = states.includes("MA");

// 인라인 적용하는 것과 크게 다르지 않다.
// 대체할 함수가 이미 존재하느냐 여부다