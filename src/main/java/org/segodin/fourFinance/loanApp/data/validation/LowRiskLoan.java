package org.segodin.fourFinance.loanApp.data.validation;

import org.segodin.fourFinance.loanApp.service.LoanService;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Validate risks of new {@link org.segodin.fourFinance.loanApp.data.domain.Loan}
 * @see {@link LoanService#isExceedsDailyLimitForIp()}
 * @see {@link LoanService#isHighRiskAmount(Double)} ()}
 * */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = LowRiskLoanValidator.class)
@Documented
public @interface LowRiskLoan {

    String message() default "Application risk is to high";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };

}
