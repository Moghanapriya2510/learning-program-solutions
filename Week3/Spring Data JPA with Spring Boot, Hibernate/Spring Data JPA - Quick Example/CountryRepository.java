package com.cognizant.ormlearn.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.cognizant.ormlearn.model.Country;

public interface CountryRepository extends JpaRepository<Country, String> {
    List<Country> findByNameContaining(String name);
    
    @Query("SELECT c FROM Country c WHERE c.name LIKE %:name% ORDER BY c.name")
    List<Country> findByNameLikeOrderByNameAsc(@Param("name") String name);
}