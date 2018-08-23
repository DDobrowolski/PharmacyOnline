package com.damek.pharmacy.controller;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ViewsController {


    @RequestMapping({ "/**/{[path:[^\\.]*}" })
    public String index() {
        return "forward:/index.html";
    }
}
