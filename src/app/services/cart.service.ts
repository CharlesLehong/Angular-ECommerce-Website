import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartProduct } from '../interfaces/CartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartProduct[] = [];
  private subject = new Subject<any>();

  constructor() { }

  addToCart(productId: number): void {
    let existingProdIndex = this.cart.findIndex(p => p.id === productId);
    if(existingProdIndex > -1)
      this.cart[existingProdIndex].quantity++;
    else
      this.cart.push({id: productId, userId: 1, quantity: 1});

    this.subject.next(this.cart);
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(p => p.id !== productId);
    this.subject.next(this.cart);
  }

  onAddToCart(): Observable<any> {
    return this.subject.asObservable();
  }
}
