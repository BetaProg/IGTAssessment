import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { CommonfuncService } from './commonfunc.service';
declare var require: any;
let products =  require('./products/products.json') ;

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modalcart.html'
})
export class NgbdModalBasic{
  closeResult: string;

  constructor(private modalService: NgbModal, private commonSerivce: CommonfuncService) {}

  public cartItems: any;
  public cartItemsFinal: any;
  public cartTotal:number = 0;

  open(content) {
	//calling the service methods to get the cart details to modal popup
    this.cartItems = this.commonSerivce.getCartItems();
    this.cartItems = Array.from(this.cartItems);
    this.cartItemsFinal = this.cartItems.map(cartItem => this.filterById(products, cartItem));
    this.cartTotal = 0;
    this.cartItemsFinal.map(cartItemFinal => this.cartTotal+=parseInt(cartItemFinal.price));
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    });
  }


  //getting the product details from the product ids
  filterById(products, id){
    console.log(products.filter(function(products){return products['id'] == id;})[0]);
    return products.filter(function(products){
        return products['id'] == id;})[0];
  }
  
  
  


}