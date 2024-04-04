import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product/product.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [ProductComponent, NgFor]
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.products = [
      {
        id: 'MyFirstId',
        name: 'MyFirstName',
        description: 'MyFirstDescription',
        price: 33.33,
        quantity: 20
      },

      {
        id: 'MySecondId',
        name: 'MyFirstName',
        description: 'MyFirstDescription',
        price: 33.33,
        quantity: 20
      },

      {
        id: 'MyThirdId',
        name: 'MyFirstName',
        description: 'MyFirstDescription',
        price: 33.33,
        quantity: 20
      }
    ];
    // this.productService.getProducts().subscribe((data) => {
    //   this.products = data;
    // })
  }
}
