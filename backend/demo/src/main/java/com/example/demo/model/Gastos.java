package com.example.demo.model;

import java.math.BigDecimal;

public class Gastos {
    private String nomeGasto;
    private BigDecimal quantGasto;

    public Gastos() {        
    }

    public String getNomeGasto() {
        return nomeGasto;
    }

    public void setNomeGasto(String nomeGasto) {
        this.nomeGasto = nomeGasto;
    }

    public BigDecimal getQuantGasto() {
        return quantGasto;
    }

    public void setQuantGasto(BigDecimal quantGasto) {
        this.quantGasto = quantGasto;
    }

}
