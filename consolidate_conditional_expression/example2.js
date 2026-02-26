// before
const example1 = () => {
    if (anEmployee.onVacation) 
        if (anEmployee.seniority > 10)
            return 1;
    return 0.5;
}

// after
const example2 = () => {
    if ((anEmployee.onVacation) && (anEmployee.seniority > 10))
        return 1;
    return 0.5;
}