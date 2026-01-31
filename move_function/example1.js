function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace
  };

  function distance(p1, p2) {}
  function radians(degrees) {}
  function calculateTime() {}
}

function totalDistance(point) {
  let result = 0;
  for (let i = 1; i < points.length; i += 1) {
    result += distance(points[i-1] , points[i]);
  }
  return result;
}