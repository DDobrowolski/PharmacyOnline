package com.damek.pharmacy.controller;

import java.security.Principal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ViewsController {
	public static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @RequestMapping({ "/**/{[path:[^\\.]*}" })
    public String index() {
        return "forward:/index.html";
    }
    
    

}
