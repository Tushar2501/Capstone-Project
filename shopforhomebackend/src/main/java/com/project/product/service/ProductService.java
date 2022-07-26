package com.project.product.service;

import java.util.List;

import com.project.product.beans.ProductStocks;
import com.project.product.entity.Product;

public interface ProductService {

	List<Product> getAllProducts();

	List<Product> getAllProductsByCategory(String category);

	Integer addProduct(Product product);

	Integer updateProduct(Product product);

	void deleteProduct(Integer productId);

	List<Product> addAllProducts(List<Product> productList);

	List<ProductStocks> getProductStocks();

	List<Product> getProductById(Integer id);
}
