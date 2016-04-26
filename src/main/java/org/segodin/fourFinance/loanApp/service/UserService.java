package org.segodin.fourFinance.loanApp.service;

import org.segodin.fourFinance.loanApp.data.domain.User;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    User getCurrentUser() throws AuthenticationCredentialsNotFoundException;

    String getCurrentIp();
}
