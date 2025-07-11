package com.cognizant.countrywebservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource({"classpath:beans.xml"})
public class CountrywebserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CountrywebserviceApplication.class, args);
    }
}