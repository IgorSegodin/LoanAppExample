package org.segodin.fourFinance.loanApp.repository;

import org.segodin.fourFinance.loanApp.data.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByEmail(String email);
}


