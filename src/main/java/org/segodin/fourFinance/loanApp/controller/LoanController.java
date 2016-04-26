package org.segodin.fourFinance.loanApp.controller;

import org.segodin.fourFinance.loanApp.data.domain.Loan;
import org.segodin.fourFinance.loanApp.repository.LoanRepository;
import org.segodin.fourFinance.loanApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LoanController {

    @Autowired
    private UserService userService;

    @Autowired
    private LoanRepository loanRepository;

    @RequestMapping(value = "/loan/list.json", method = RequestMethod.POST)
    public List<Loan> listLoans() {
        return loanRepository.findByUserEmail(userService.getCurrentUser().getEmail());
    }

}
