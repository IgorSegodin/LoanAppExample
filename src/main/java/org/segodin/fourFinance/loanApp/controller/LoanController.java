package org.segodin.fourFinance.loanApp.controller;

import org.segodin.fourFinance.loanApp.data.domain.Loan;
import org.segodin.fourFinance.loanApp.data.dto.LoanCreateDto;
import org.segodin.fourFinance.loanApp.repository.LoanRepository;
import org.segodin.fourFinance.loanApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

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

    @RequestMapping(value = "/loan/apply.json", method = RequestMethod.POST)
    public Loan applyLoad(@Valid LoanCreateDto dto, HttpServletRequest request) {
        Loan loan = new Loan();
        loan.setAmount(dto.getAmount());
        loan.setExpireDate(dto.getExpireDate());
        loan.setApplicationDate(new Date());
        loan.setUser(userService.getCurrentUser());
        loan.setIpAddress(request.getRemoteAddr());
        return loanRepository.save(loan);
    }

}
