package com.example.demo.controller;
import com.example.demo.model.Gastos;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gastos")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class AppController {
    private Map<String, Gastos> gastos;

    @PostMapping
    public Object receberGastos(@RequestBody Map<String, Gastos> gastos) {

        this.gastos = gastos;

        System.out.println(gastos);

        return gastos;
    }

    @GetMapping
    public Map<String, Gastos> receberGastos() {     
        return gastos; 
    }

}
