package com.damek.pharmacy.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.DecimalMin;

import lombok.Data;

@Data
@Entity
public class Product {	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String description;
    @DecimalMin(value = "0.00", message = "*Price has to be non negative number")
	private BigDecimal price;
    private String imgUrl;
    private int quantity;

    

	
	public Product() {}
	public Product(String name, String description, BigDecimal price, String url) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.imgUrl = url;
		this.quantity = 1;
		
	}
	

}
