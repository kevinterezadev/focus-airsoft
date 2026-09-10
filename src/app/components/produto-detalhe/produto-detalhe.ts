import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute , RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-produto-detalhe',
  imports: [RouterLink],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css',
})
export class ProdutoDetalhe implements OnInit {

  private route = inject(ActivatedRoute);
  private _productsService = inject(ProductsService);
  private _cartService = inject(CartService);

  product: any

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      const productId = idParam ? +idParam : 0;

      this.product = this._productsService.getProductById(productId);
    });
  }

  addToCart() {
    this._cartService.addToCart();
  }
}
