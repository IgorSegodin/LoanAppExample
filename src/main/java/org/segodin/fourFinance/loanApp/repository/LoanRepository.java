package org.segodin.fourFinance.loanApp.repository;

import org.segodin.fourFinance.loanApp.data.domain.Loan;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface LoanRepository extends PagingAndSortingRepository<Loan, Long> {

    // TODO load projection to exclude user from result
    List<Loan> findByUserEmail(String email);

}


