package org.segodin.fourFinance.loanApp.dao;

public interface LoanDao {

    /**
     * @return number of today applications for specific user and ip address
     * */
    int getUserApplicationNumberWithSameIpForToday(long userId, String ip);
}
