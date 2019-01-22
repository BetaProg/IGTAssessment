/***************************************************************************************/
/*** Created for Displaying all the products in the JSON file***/
/***************************************************************************************/

import { Component, OnInit } from '@angular/core';
declare var require: any;
let products =  require('./products.json') ;
import { ProductFilterPipe } from '../product-filter.pipe';
import { CommonfuncService } from '../commonfunc.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductFilterPipe]
})
export class ProductsComponent implements OnInit {

  private products: any[] = [];
  constructor(private commonservice: CommonfuncService) {
      this.products = products;
   }

   private showItemAdded: boolean = false;
   private showItemExisting: boolean = false;
   /*Adding the products to cart through service. Initially checks if the product exists in the cart. If not add, else throw an inline alert*/
   addToCart(product){
	   /*If cart is not null, check for the product id being added and add if not existing*/
	if(sessionStorage.getItem("cartItems")!=null){
		if(JSON.parse(sessionStorage.getItem("cartItems")).indexOf(product.toString())==-1){
			this.showItemAdded = true;
			this.showItemExisting = false;
			this.commonservice.addToCartArray(product);
		}
		else{
			this.showItemExisting = true;
			this.showItemAdded = false;
		}
	}
	/*If cart is null, add directly to the cart and show a confirmation message through inline message*/
	else{
		this.commonservice.addToCartArray(product);
		this.showItemExisting = false;
		this.showItemAdded = true;
	}
	
   }

  ngOnInit() {
    
  }

}
