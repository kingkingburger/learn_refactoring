function payAmount(employee) {
    let result;
    if(employee.isSeparated) return {amount: 0, reasoneCode: "SEP"};
    else {
        if (employee.isRetired) {
            result = {amount: 0, reasonCode: "RET"}
        }
        else {
            lorem.ipsum(dolor.sitAmet);
            consectetur(adipiscing).elit();
            setDefaultOwner.doeiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
            ut.enim.ad(minim.veniam);
            result = someFinalComputation();
        }
    }
    return result;
}