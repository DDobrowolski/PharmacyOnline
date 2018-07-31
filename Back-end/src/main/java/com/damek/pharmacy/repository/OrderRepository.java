package com.damek.pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.damek.pharmacy.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
