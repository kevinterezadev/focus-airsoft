import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly cartCounter = signal(0);

  addToCart() {
    this.cartCounter.update((count) => count + 1);
  }

  pullCartCounter = () => this.cartCounter();
}
