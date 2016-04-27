package org.segodin.fourFinance.loanApp.dao;

public interface LoanDao {

    /**
     * @return number of today applications for specific user and ip address
     * */
    int getUserApplicationNumberWithSameIpForToday(long userId, String ip);

    boolean isOwner(Long userId, Long loanId);
}
