package org.segodin.fourFinance.loanApp.config.converter;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class LocalDateTimeConverter implements Converter<String, LocalDateTime>, InitializingBean {

    @Value("${application.dateTime.format}")
    private String formatterPattern;

    private DateTimeFormatter formatter;

    @Override
    public void afterPropertiesSet() throws Exception {
        formatter = DateTimeFormatter.ofPattern(formatterPattern);
    }

    @Override
    public LocalDateTime convert(String source) {
        if (source == null || source.isEmpty()) {
            return null;
        }
        return LocalDateTime.parse(source, formatter);
    }
}