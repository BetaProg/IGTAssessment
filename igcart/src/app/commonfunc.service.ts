import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonfuncService {

  private cartArray: any[] = JSON.parse(sessionStorage.getItem("cartItems"));
  private cartArraySet = new Set();
  addToCartArray(productArray: any): void{
      this.cartArray = JSON.parse(sessionStorage.getItem("cartItems"));
	  if(this.cartArray==null){
		this.cartArray = Object.values(productArray);
	  }
      this.cartArray = Object.values(this.cartArray);
      this.cartArray.push(JSON.stringify(productArray));
      sessionStorage.setItem("cartItems", JSON.stringify(this.cartArray));
      this.cartArraySet = new Set(this.cartArray);
  }
  public viewCart : boolean = false;
  
  toggle(): void{
    console.log(this.viewCart);
    this.viewCart = !this.viewCart;
  }
  getCartCount(){
    if(sessionStorage.getItem("cartItems") == null){
      return 0;
    }
    return JSON.parse(sessionStorage.getItem("cartItems")).length;
  }
  getCartItems(){
	this.cartArray = JSON.parse(sessionStorage.getItem("cartItems"));
	this.cartArraySet = new Set(this.cartArray);
    return this.cartArraySet;
  }
  constructor() { }
}
