package com.cognizant.code.service;

import com.cognizant.code.model.Country;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {
    private final List<Country> countries;

    public CountryService() throws Exception {
        this.countries = loadCountries();
    }

    private List<Country> loadCountries() throws Exception {
        List<Country> countryList = new ArrayList<>();
        InputStream is = new ClassPathResource("country.xml").getInputStream();
        
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        Document document = builder.parse(is);
        
        NodeList nodeList = document.getElementsByTagName("country");
        for (int i = 0; i < nodeList.getLength(); i++) {
            Element element = (Element) nodeList.item(i);
            Country country = new Country();
            country.setCode(getElementValue(element, "code"));
            country.setName(getElementValue(element, "name"));
            countryList.add(country);
        }
        return countryList;
    }

    private String getElementValue(Element parent, String tagName) {
        return parent.getElementsByTagName(tagName).item(0).getTextContent();
    }

    public Country getCountry(String code) {
        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}