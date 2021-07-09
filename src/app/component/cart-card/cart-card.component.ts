import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {
  @Input() product: Product = 
    {
      id: 0,
      name: "",
      description: "",
      price: 0,
      size: "",
      imgUrl: "",
      categoryid: 0,
      category: "",
      departmentId: 0,
      department: "",
    };

  constructor() { }

  ngOnInit(): void {
  }

}
