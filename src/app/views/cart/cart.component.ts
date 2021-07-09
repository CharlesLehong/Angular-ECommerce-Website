import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/CartProduct';
import { Product } from 'src/app/interfaces/Product';
import { CartService } from "../../services/cart.service";
import { ProductsService } from "../../services/products.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  cart: CartProduct[] = [
    {
      id: 1,
      userId: 1,
      quantity: 2
    }
  ];
  subscription: Subscription = new Subscription();

  constructor(private cartService: CartService, 
    private productsService: ProductsService) { 
    this.subscription = this.cartService.onAddToCart()
      .subscribe(cart => this.cart = cart);
  }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products)
  }

  getProduct(productId: number): Product {
    let product = this.products.find(p => p.id === productId);
    if(product) return product;
    
    return {     
      id: 0,
      name: "",
      description: "",
      price: 0,
      size: "",
      imgUrl: "",
      categoryid: 0,
      category: "",
      departmentId: 0,
      department: ""
    };
  }

  getProductsTotal(): number{
    let total = 0;
    this.cart.forEach(cartProduct => {
      let product = this.products.find(p => p.id === cartProduct.id);
      if(product) total += (product.price * cartProduct.quantity);
    })

    return total;
  }

  updateQuantity(event: Event, productId: number): void{
    let newQuantity = parseInt((event.target as HTMLInputElement).value);
    let productIndex = this.cart.findIndex(p => p.id === productId);
    this.cart[productIndex].quantity = newQuantity;
  }

  removeFromCart(productId: number): void{
    this.cartService.removeFromCart(productId);
  }
}
