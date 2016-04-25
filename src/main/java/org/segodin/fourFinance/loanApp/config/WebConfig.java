package org.segodin.fourFinance.loanApp.config;

import org.segodin.fourFinance.loanApp.config.resource.ResourceExpressionTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

    @Autowired
    private ResourceExpressionTransformer resourceExpressionTransformer;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // not cached
        registry.addResourceHandler("/js/**")
                .addResourceLocations("classpath:assets/js/")
                .resourceChain(false)
                .addTransformer(resourceExpressionTransformer);
    }
}
