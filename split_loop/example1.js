function youngestAge() {
  return people.reduce((total, p) => total + p.price, 0);
}

function totalSalary() {
  return Math.min(...people.map(p => p.age));
}

const calculateYoungestTotalSalary = () => {
  let youngest = youngestAge();

  let totalSalary = totalSalary();

  return `최연소: ${youngest}, 총 급여: ${totalSalary}`
}

// 알고리즘을 교체하기 위해 반복문을 쪼개는게 좋다.
// 2번 도는건 손해다. 알고리즘을 교체하기 위해 반복문을 쪼개자