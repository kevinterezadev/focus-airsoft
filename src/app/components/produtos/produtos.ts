import { Component, inject, } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { CartService } from '../../services/cart-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-produtos',
  imports: [RouterLink],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);
  
  productsList = this.productsService.getProductsList();

  addToCart() {
    this.cartService.addToCart();
  }
}
