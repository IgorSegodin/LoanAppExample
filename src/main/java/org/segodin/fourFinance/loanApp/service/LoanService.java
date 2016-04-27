package org.segodin.fourFinance.loanApp.service;

public interface LoanService {

    String PRPOP_MAX_AMOUNT = "application.loan.maxAmount";
    String PRPOP_MAX_DAILY_APPLICATION_PER_IP = "application.loan.dailyMaxApplicationPerIp";
    String PRPOP_RISK_TIME_PATTERN = "application.loan.riskTimePattern";
    String PRPOP_FROM_RISK_TIME = "application.loan.fromRiskTimeString";
    String PRPOP_TO_RISK_TIME = "application.loan.toRiskTimeString";

    /**
     * @return true if current time is between risk time borders and amount value is maximum possible
     * */
    boolean isHighRiskAmount(Double amount);

    /**
     * @return true if current user already has more applications than daily limit with same IP address
     * */
    boolean isExceedsDailyLimitForIp();

    boolean isOwner(Long userId, Long loanId);
}
