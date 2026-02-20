function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function example1 {
  if (summer())
    charge = quantity * plan.summerRate;
  else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
}
