package org.segodin.fourFinance.loanApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

/**
 * Redundant {@link ComponentScan} need this for IDEA to properly highlight autowired beans, without any errors
 * */
@ComponentScan(basePackages = "org.segodin.fourFinance.loanApp")
@SpringBootApplication
public class App {

    public static void main(String[] args) {
        ConfigurableApplicationContext ctx = SpringApplication.run(App.class, args);
    }
}
