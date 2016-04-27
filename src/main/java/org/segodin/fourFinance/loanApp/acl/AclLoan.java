package org.segodin.fourFinance.loanApp.acl;

import org.segodin.fourFinance.loanApp.data.domain.User;
import org.segodin.fourFinance.loanApp.service.LoanService;
import org.segodin.fourFinance.loanApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AclLoan {

    @Autowired
    private LoanService loanService;

    @Autowired
    private UserService userService;

    public boolean isCanDelete(Long loanId) {
        User user = userService.getCurrentUser();
        return loanService.isOwner(user.getId(), loanId);
    }
}
