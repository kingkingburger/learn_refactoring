// before

function foundPerson(people) {
  for(let i = 0; i <people.length; i++) {
    if(people[i] === "Don") {
      return "Don";
    }
    if(people[i] === "John") {
      return "John";
    }
    if(people[i] === "Kent") {
      return "Kent";
    }
  }
  return "";
}

// after
function foundPerson2(people) {
  const candidates = ["Don", "John", "Kent"];
  return people.find(p => candiates.includes(p)) || "";
}

// 코드를 간단하게 할 수 있는 방법을 찾는다.
// 이건 ai가 제일 잘할 것 같다.