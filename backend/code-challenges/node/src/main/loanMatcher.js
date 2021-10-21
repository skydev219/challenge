const Loan = require('../main/loan');

module.exports.loans = (customer) => {

    const loans = [];

    if (customer.income <= 3000) {
        loans.push(new Loan('PERSONAL_LOAN'));
    }

    return loans;

}
