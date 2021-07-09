import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { Product } from '../interfaces/Product';
import { ProductCategory } from '../interfaces/ProductCategory';
import { ProductDepartment } from '../interfaces/ProductDepartment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
      {
        id: 1,
        name: "Polo Sneaker",
        description: "Henry side flash sneaker - white & black",
        price: 799.00,
        size: "Small",
        imgUrl: "https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/2225277/original.jpg",
        categoryid: 1,
        category: "Shoes",
        departmentId: 1,
        department: "Men"
      },
      {
        id: 2,
        name: "Cotton On Jeans",
        description: "Super skinny jeans - blue",
        price: 499.00,
        size: "Small",
        imgUrl: "https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/702726/original.jpg",
        categoryid: 2,
        category: "Jeans",
        departmentId: 1,
        department: "Men",
      },
      {
        id: 3,
        name: "Superbalist T-shirt",
        description: "Nasa Worm logo crew neck tee - black",
        price: 199.00,
        size: "small",
        imgUrl: "https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/1976968/original.jpg",
        categoryid: 3,
        category: "T-Shirts",
        departmentId: 1,
        department: "Men",
      },
      {
        id: 4,
        name: "Polo Cap",
        description: "Mens parker classic peak - white",
        price: 299.00,
        size: "small",
        imgUrl: "https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/2184978/original.jpg",
        categoryid: 4,
        category: "Hats",
        departmentId: 1,
        department: "Men",
      },
  ];
  productCategories: ProductCategory[] = [
    {
      id: 1,
      description: "Shoes"
    },
    {
      id: 2,
      description: "Jeans"
    },
    {
      id: 3,
      description: "T-Shirts"
    },
    {
      id: 4,
      description: "Hats"
    }
];
  productDepartments: ProductDepartment[] = [
    {
      id: 1,
      description: "Men"
    },
    {
      id: 2,
      description: "Women"
    },
    {
      id: 3,
      description: "Girls"
    },
    {
      id: 4,
      description: "Boys"
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return of(this.productCategories);
  }

  getProductDepartments(): Observable<ProductDepartment[]> {
    return of(this.productDepartments);
  }
}
