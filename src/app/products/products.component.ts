import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { name: 'Classic Popcorn', description: 'Simple and delicious.', price: 3.99 },
    { name: 'Caramel Popcorn', description: 'Sweet and crunchy.', price: 4.99 },
    { name: 'Cheddar Popcorn', description: 'Savory and cheesy.', price: 4.49 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    console.log(`${product.name} added to cart`);
    // Add functionality to add product to cart
  }
}
