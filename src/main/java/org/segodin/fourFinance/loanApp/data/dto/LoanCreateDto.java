package org.segodin.fourFinance.loanApp.data.dto;

import java.util.Date;
import javax.validation.constraints.NotNull;

public class LoanCreateDto {

    @NotNull
    // TODO need javax.validation.constraints.Min but for doubles
    private Double amount;

    @NotNull
    private Date expireDate;

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Date getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Date expireDate) {
        this.expireDate = expireDate;
    }
}
