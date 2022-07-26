package com.project.product.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.product.beans.ProductStocks;
import com.project.product.entity.Product;
import com.project.product.repository.ProductRepository;

@Repository
public class ProductServiceImpl implements ProductService {

	
	@Autowired
	ProductRepository productRepository;
	
	
	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return productRepository.findAll();
	}

	@Override
	public List<Product> getAllProductsByCategory(String category) {
		// TODO Auto-generated method stub
		return productRepository.findByCategory(category.toUpperCase());
	}

	@Override
	public Integer addProduct(Product product) {
		// TODO Auto-generated method stub
		product.setCategory(product.getCategory().toUpperCase());
		return productRepository.save(product).getProductId();
	}

	@Override
	public Integer updateProduct(Product product) {
		// TODO Auto-generated method stub
		return productRepository.save(product).getProductId();
	}

	@Override
	public void deleteProduct(Integer productId) {
		// TODO Auto-generated method stub
		productRepository.delete(productRepository.findByProductId(productId).get(0));
	}

	@Override
	public List<Product> addAllProducts(List<Product> productList) {
		// TODO Auto-generated method stub
		return productRepository.saveAll(productList);	
	}

	@Override
	public List<ProductStocks> getProductStocks() {
		// TODO Auto-generated method stub
		List<Product> productList = productRepository.findAll();
		List<ProductStocks> productStocksList = new ArrayList<>();
		productList.forEach(product -> {
			productStocksList.add(new ProductStocks(product.getName(), product.getStock()));
		});
		return productStocksList;
	}

	@Override
	public List<Product> getProductById(Integer id) {
		// TODO Auto-generated method stub
		return productRepository.findByProductId(id);
	}

	
}
