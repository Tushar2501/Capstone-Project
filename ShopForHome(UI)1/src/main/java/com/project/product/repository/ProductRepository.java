package com.project.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.product.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

	public List<Product> findByCategory(String category);
	List<Product> findByProductId(Integer productId);
}
