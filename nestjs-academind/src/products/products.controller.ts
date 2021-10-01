import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productSerivce: ProductService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): void {
    this.productSerivce.insertProduct(prodTitle, prodDesc, prodPrice);
  }
}
