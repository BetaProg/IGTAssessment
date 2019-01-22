import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { RouterModule, Routes} from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modalcart';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartdetailsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFilterPipe,
    ProductDetailsComponent,
    TopnavbarComponent,
    CartdetailsComponent,
    NgbdModalBasic
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
