package org.segodin.fourFinance.loanApp.data.dto;

import org.segodin.fourFinance.loanApp.data.validation.LowRiskLoan;

import java.time.LocalDateTime;
import java.util.Date;
import javax.validation.constraints.NotNull;

@LowRiskLoan
public class LoanCreateDto {

    @NotNull
    // TODO need javax.validation.constraints.Min but for doubles
    private Double amount;

    @NotNull
    private LocalDateTime expireDate;

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public LocalDateTime getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(LocalDateTime expireDate) {
        this.expireDate = expireDate;
    }
}
