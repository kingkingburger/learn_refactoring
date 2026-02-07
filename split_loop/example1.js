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
