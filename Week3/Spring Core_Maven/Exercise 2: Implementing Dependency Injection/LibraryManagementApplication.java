package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        try {
            // Load Spring context
            ApplicationContext context = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
            
            // Get the BookService bean
            BookService bookService = context.getBean("bookService", BookService.class);
            
            // Test the service
            bookService.addBook("Spring in Action");
            bookService.addBook("Clean Code");
            
            System.out.println("Dependency injection with Maven works!");
        } catch (Exception e) {
            System.err.println("Error initializing Spring context: " + e.getMessage());
            e.printStackTrace();
        }
    }
}