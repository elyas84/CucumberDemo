package com.vytrack.step_definitions;

import com.vytrack.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {
    @Before
    public void setUp(){
        System.out.println("This is coming from BEFORE");
    }
    @After
    public void tearDown(){
        Driver.closeDriver();
    }

    @Before("@db")
    public void setUpDataBase(){
        System.out.println("Connection DATABASE");
    }
    @After("@db")
    public void tearDownSalesManager(){
        System.out.println("Closing DadaBase Connection\n");

    }



}
