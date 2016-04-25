package org.segodin.fourFinance.loanApp.service.impl;

import org.segodin.fourFinance.loanApp.data.domain.User;
import org.segodin.fourFinance.loanApp.repository.UserRepository;
import org.segodin.fourFinance.loanApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("Can't find user with email: " + email);
        }
        return user;
    }
}
