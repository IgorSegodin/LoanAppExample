package org.segodin.fourFinance.loanApp.service.impl;

import org.segodin.fourFinance.loanApp.dao.LoanDao;
import org.segodin.fourFinance.loanApp.service.LoanService;
import org.segodin.fourFinance.loanApp.service.UserService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Component
public class LoanServiceImpl implements LoanService, InitializingBean {

    @Value("${" + PRPOP_MAX_AMOUNT +"}")
    private Double maxAmount;

    @Value("${" + PRPOP_MAX_DAILY_APPLICATION_PER_IP +"}")
    private Integer maxDailyApplicationPerIp;

    @Value("${" + PRPOP_RISK_TIME_PATTERN + "}")
    private String riskTimePattern;

    @Value("${" + PRPOP_FROM_RISK_TIME + "}")
    private String fromRiskTimeString;

    @Value("${" + PRPOP_TO_RISK_TIME +"}")
    private String toRiskTimeString;

    private LocalTime fromRiskTime;
    private LocalTime toRiskTime;

    @Autowired
    protected LoanDao loanDao;

    @Autowired
    protected UserService userService;

    @Override
    public void afterPropertiesSet() throws Exception {
        if (maxAmount == null || maxAmount == 0) {
            throw new IllegalStateException("Illegal value of property: " + PRPOP_MAX_AMOUNT);
        }
        if (maxDailyApplicationPerIp == null || maxDailyApplicationPerIp == 0) {
            throw new IllegalStateException("Illegal value of property: " + PRPOP_MAX_DAILY_APPLICATION_PER_IP);
        }
        if (StringUtils.isEmpty(riskTimePattern)) {
            throw new IllegalStateException("Illegal value of property: " + PRPOP_RISK_TIME_PATTERN);
        }
        if (StringUtils.isEmpty(fromRiskTimeString)) {
            throw new IllegalStateException("Illegal value of property: " + PRPOP_FROM_RISK_TIME);
        }
        if (StringUtils.isEmpty(toRiskTimeString)) {
            throw new IllegalStateException("Illegal value of property: " + PRPOP_TO_RISK_TIME);
        }

        DateTimeFormatter riskTimeFormatter = DateTimeFormatter.ofPattern(riskTimePattern);
        fromRiskTime = LocalTime.parse(fromRiskTimeString, riskTimeFormatter);
        toRiskTime = LocalTime.parse(toRiskTimeString, riskTimeFormatter);
    }

    @Override
    public boolean isHighRiskAmount(Double amount) {
        if (amount >= maxAmount) {
            LocalTime now = LocalTime.now();
            return now.isBefore(toRiskTime) && now.isAfter(fromRiskTime);
        } else {
            return false;
        }
    }

    @Override
    @Transactional(readOnly = true)
    public boolean isExceedsDailyLimitForIp() {
        int dailyAmount = loanDao.getUserApplicationNumberWithSameIpForToday(
                userService.getCurrentUser().getId(),
                userService.getCurrentIp()
        );
        return dailyAmount >= maxDailyApplicationPerIp;
    }

    @Override
    @Transactional(readOnly = true)
    public boolean isOwner(Long userId, Long loanId) {
        return loanDao.isOwner(userId, loanId);
    }
}
