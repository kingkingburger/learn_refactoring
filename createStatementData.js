function createPerformanceCalculator(performance, play) {
  switch (play.type) {
    case "tragedy": return new TragedyCalculator(performance, play);
    case "comedy": return new ComedyCalculator(performance, play);
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);

  }
}

class TragedyCalculator  extends PerformanceCalculator {
  // 한번 공연에 대한 요금 계산
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  // 한번 공연에 대한 요금 계산
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    return result;
  }

  // 희극 관객 5명마다 추가 포인트를 제공한다.
  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}

// 공연료 계산기 클래스
class PerformanceCalculator {
  constructor(performance, play) {
    this.performance = performance;
    this.play = play;
  }

  // 한번 공연에 대한 요금 계산
  get amount() {
    throw new Error('서브클래스에서 처리하도록 설계되었습니다.')
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}

export default function createStatementData(invoice, plays) {
  const result = {}
  // 중간 데이터 생성을 전담
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(performance) {
    const calculator = createPerformanceCalculator(performance, playFor(performance));
    let result = Object.assign({}, performance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(performance) {
    return plays[performance.playID];
  }


  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0)
  }

  function totalAmount(data) {
    return data.performances.reduce((total,p) => total + p.amount, 0)
  }
}