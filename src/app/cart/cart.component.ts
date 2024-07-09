import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [
    // Sample data for cart items
    { name: 'Classic Popcorn', price: 3.99, quantity: 2 },
    { name: 'Caramel Popcorn', price: 4.99, quantity: 1 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
