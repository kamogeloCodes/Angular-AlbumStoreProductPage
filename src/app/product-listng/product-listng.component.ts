import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-listng',
  templateUrl: './product-listng.component.html',
  styleUrls: ['./product-listng.component.css']
})
export class ProductListngComponent implements OnInit {

  products: ProductService[];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
  }

}
