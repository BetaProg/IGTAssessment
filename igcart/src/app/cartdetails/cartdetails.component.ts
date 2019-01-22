import { Component, OnInit } from '@angular/core';
import { CommonfuncService } from '../commonfunc.service';
declare var require: any;
let products =  require('../products/products.json') ;

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {

  constructor(private commonSerivce: CommonfuncService) { }

  public cartItems: any;
  public cartItemsFinal: any;
  ngOnInit() {
    this.cartItems = this.commonSerivce.getCartItems();
    this.cartItems = Array.from(this.cartItems);
    this.cartItemsFinal = this.cartItems.map(cartItem => this.filterById(products, cartItem));
  }
  filterById(products, id){
    return products.filter(function(products){return products['id'] == id;})[0];
  }

}
