// before
function potentialEnergy(mass, height) {
  return mass * 9.81 * height;
}

// after
const STANDARD_GRAVITY = 9.81;
function potentialEnergy2(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}