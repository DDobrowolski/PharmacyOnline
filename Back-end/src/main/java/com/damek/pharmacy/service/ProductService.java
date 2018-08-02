package com.damek.pharmacy.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.damek.pharmacy.model.Product;
import com.damek.pharmacy.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> getAllProducts(){
		List<Product> products = new ArrayList<>();
		productRepository.findAll().forEach(products::add);
		return products;
	}
	
	public Product getProduct(Long id) {
		return productRepository.findById(id).orElse(null);
	}

	public void addProduct(Product product) {
		productRepository.save(product);
	}

	public void updateProduct(Long id, Product product) {
		productRepository.save(product);
	}

	public void deleteProduct(Long id) {
		productRepository.deleteById(id);
	}
}
