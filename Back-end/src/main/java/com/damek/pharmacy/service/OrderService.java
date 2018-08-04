package com.damek.pharmacy.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.damek.pharmacy.model.Order;
import com.damek.pharmacy.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	public List<Order> getAllOrders(){
		List<Order> orders = new ArrayList<>();
		orderRepository.findAll().forEach(orders::add);
		return orders;
	}
	
	public Order getOrder(Long id) {
		return orderRepository.findById(id).orElse(null);
	}

	public void addOrder(Order order) {
		orderRepository.save(order);
	}

	public void updateOrder(Long id, Order order) {
		orderRepository.save(order);
	}

	public void deleteOrder(Long id) {
		orderRepository.deleteById(id);
	}
	
}
