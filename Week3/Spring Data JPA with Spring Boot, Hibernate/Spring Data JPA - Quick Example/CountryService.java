package com.cognizant.ormlearn.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;

@Service
public class CountryService {
    
    @Autowired
    private CountryRepository repository;
    
    public List<Country> getAllCountries() {
        return repository.findAll();
    }
    
    public Country findCountryByCode(String code) {
        return repository.findById(code).orElse(null);
    }
    
    public List<Country> searchCountries(String name) {
        return repository.findByNameContaining(name);
    }
}