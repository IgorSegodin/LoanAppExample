package org.segodin.fourFinance.loanApp.data.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.segodin.fourFinance.loanApp.config.AppContextHolder;
import org.segodin.fourFinance.loanApp.data.domain.Loan;

public class LowRiskLoanValidator implements ConstraintValidator<LowRiskLoan, Loan> {

    @Override
    public void initialize(LowRiskLoan constraintAnnotation) {
//        AppContextHolder.getContext().getBean(LoanService);
    }

    @Override
    public boolean isValid(Loan value, ConstraintValidatorContext context) {
        return false;
    }
}
