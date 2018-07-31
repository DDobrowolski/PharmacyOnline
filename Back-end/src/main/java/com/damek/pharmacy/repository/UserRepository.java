package com.damek.pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.damek.pharmacy.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public User findByUsername(String username);
	}