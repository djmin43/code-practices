import { Injectable } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  insertProduct(title, description, price) {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, title, description, price);
    this.products.push(newProduct);
    console.log(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }
}
