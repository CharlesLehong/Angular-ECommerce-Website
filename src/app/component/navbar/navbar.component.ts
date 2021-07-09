import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CartProduct } from 'src/app/interfaces/CartProduct';
import { CartService } from "../../services/cart.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faLock = faLock;
  faShoppingCart = faShoppingCart;
  faReceipt = faReceipt;
  faStar = faStar;
  faUser = faUser;
  subscription: Subscription = new Subscription();
  cart: CartProduct[] = [];

  constructor(private cartService: CartService) { 
    this.subscription = this.cartService.onAddToCart()
      .subscribe(cart => this.cart = cart);
  }

  ngOnInit(): void {
  }

}
