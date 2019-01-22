import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: any, term: any, pricefilter: any): any {
    if((term === undefined || term == "All") && (pricefilter=="" || pricefilter === undefined)){
		return products;
	} 
	else{
		return products.filter(
			product => {
				console.log(term, pricefilter);
				if(term == "" || term == "All"){
				 return (product.price>parseInt(pricefilter)-5 && product.price<=parseInt(pricefilter));
				}
				else if(pricefilter == "" || pricefilter == null){
				 return product.category.toLowerCase().indexOf(term.toLowerCase())==0;
				}
				else if(product.category.toLowerCase().indexOf(term.toLowerCase()) == 0  && (product.price>parseInt(pricefilter)-5 && product.price<=parseInt(pricefilter))){
				 return true;
				}
			}
		)
	}
	
  }

}
