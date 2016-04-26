package org.segodin.fourFinance.loanApp.util;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;

/**
 * Date convert helper.
 * Can't use LocalDateTime in domain entity, because of version and incompatibilities hell of MySql driver and hibernate.
 * */
public class DateUtil {

    public static Date localDateTimeToDate(LocalDateTime input) {
        ZonedDateTime zonedDateTime = input.atZone(ZoneId.systemDefault());
        return Date.from(zonedDateTime.toInstant());
    }

    public static LocalDateTime dateToLocalDateTime(Date input) {
        return LocalDateTime.ofInstant(input.toInstant(), ZoneId.systemDefault());
    }
}
