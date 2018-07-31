package com.damek.pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.damek.pharmacy.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	

}
