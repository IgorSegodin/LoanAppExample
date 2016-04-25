package org.segodin.fourFinance.loanApp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AuthController {

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String getIndex() {
        return "login";
    }

    // TODO register new user method

}