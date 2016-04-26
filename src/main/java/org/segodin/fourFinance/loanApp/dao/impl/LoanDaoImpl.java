package org.segodin.fourFinance.loanApp.dao.impl;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.segodin.fourFinance.loanApp.dao.AbstractDao;
import org.segodin.fourFinance.loanApp.dao.LoanDao;
import org.segodin.fourFinance.loanApp.data.domain.Loan;
import org.segodin.fourFinance.loanApp.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class LoanDaoImpl extends AbstractDao implements LoanDao {

    @Autowired
    public LoanDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public int getUserApplicationNumberWithSameIpForToday(long userId, String ip) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime startDay = now
                .withHour(0)
                .withMinute(0)
                .withSecond(0);
        LocalDateTime endDay = now
                .withHour(23)
                .withMinute(59)
                .withSecond(59);

        return ((Number) getSession().createCriteria(Loan.class, "l")
                .setProjection(Projections.rowCount())
                .add(Restrictions.eq("user.id", userId))
                .add(Restrictions.eq("ipAddress", ip))
                .add(Restrictions.ge("applicationDate", DateUtil.localDateTimeToDate(startDay)))
                .add(Restrictions.le("applicationDate", DateUtil.localDateTimeToDate(endDay)))
                .uniqueResult())
                .intValue();
    }
}
