package com.damek.pharmacy.model;

import java.math.BigDecimal;
import java.util.ArrayList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	private String fName;
	private String lName;
	private BigDecimal sum;
	private String city;
	private String phone;
	private String street;
	private String address;
	private String com;

	@Lob
	@Column(length=100000)
	private ArrayList<Object> items;
	

}
