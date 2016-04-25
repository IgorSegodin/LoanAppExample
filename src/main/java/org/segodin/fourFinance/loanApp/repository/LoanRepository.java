package org.segodin.fourFinance.loanApp.repository;

import org.segodin.fourFinance.loanApp.data.domain.Loan;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface LoanRepository extends PagingAndSortingRepository<Loan, Long> {
}


