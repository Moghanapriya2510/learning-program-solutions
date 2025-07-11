package com.cognizant.countrywebservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.countrywebservice.model.Country;

@RestController
@RequestMapping("/country")
public class CountryController {
    
    @Autowired
    private Country in; // This will be injected from beans.xml

    @GetMapping
    public Country getCountryIndia() {
        return in;
    }
}