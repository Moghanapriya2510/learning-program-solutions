package com.cognizant.ormlearn.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@RestController
@RequestMapping("/countries")
public class CountryController {
    
    @Autowired
    private CountryService countryService;
    
    @GetMapping
    public List<Country> getAllCountries() {
        return countryService.getAllCountries();
    }
    
    @GetMapping("/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        return countryService.findCountryByCode(code);
    }
    
    @GetMapping("/search/{name}")
    public List<Country> searchCountries(@PathVariable String name) {
        return countryService.searchCountries(name);
    }
}