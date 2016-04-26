package org.segodin.fourFinance.loanApp.config;

import org.segodin.fourFinance.loanApp.config.converter.LocalDateTimeConverter;
import org.segodin.fourFinance.loanApp.config.resource.ResourceExpressionTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

    @Autowired
    private ResourceExpressionTransformer resourceExpressionTransformer;

    @Autowired
    private LocalDateTimeConverter localDateTimeConverter;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/js/**")
                .addResourceLocations("classpath:assets/js/")
                .resourceChain(false)
                .addTransformer(resourceExpressionTransformer);
    }

    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addConverter(localDateTimeConverter);
    }
}
