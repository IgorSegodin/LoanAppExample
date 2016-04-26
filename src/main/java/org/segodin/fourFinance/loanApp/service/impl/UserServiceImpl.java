package org.segodin.fourFinance.loanApp.service.impl;

import org.segodin.fourFinance.loanApp.data.domain.User;
import org.segodin.fourFinance.loanApp.repository.UserRepository;
import org.segodin.fourFinance.loanApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

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

    public User getCurrentUser() throws AuthenticationCredentialsNotFoundException {
        if (SecurityContextHolder.getContext() != null && SecurityContextHolder.getContext().getAuthentication() != null) {
            return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        } else {
            throw new AuthenticationCredentialsNotFoundException("Not authenticated.");
        }
    }

    @Override
    public String getCurrentIp() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                .getRequest();
        return request.getRemoteAddr();
    }
}
