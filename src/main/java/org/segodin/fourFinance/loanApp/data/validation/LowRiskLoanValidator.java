package org.segodin.fourFinance.loanApp.data.validation;

import org.segodin.fourFinance.loanApp.data.dto.LoanCreateDto;
import org.segodin.fourFinance.loanApp.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class LowRiskLoanValidator implements ConstraintValidator<LowRiskLoan, LoanCreateDto> {

    @Autowired
    private LoanService loanService;

    @Override
    public void initialize(LowRiskLoan constraintAnnotation) {
    }

    @Override
    public boolean isValid(LoanCreateDto value, ConstraintValidatorContext context) {
        context.disableDefaultConstraintViolation();
        if (value.getAmount() != null && loanService.isHighRiskAmount(value.getAmount())) {
                context.buildConstraintViolationWithTemplate("You are trying to apply loan with maximum amount in unfavourable time. Try again later.")
                .addConstraintViolation();
            return false;
        } else if (loanService.isExceedsDailyLimitForIp()) {
            context.buildConstraintViolationWithTemplate("You have exceeded maximum number of applications per day with the same IP address.")
                    .addConstraintViolation();
            return false;
        } else {
            return true;
        }
    }
}
