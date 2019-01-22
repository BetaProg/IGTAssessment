import { Component, OnInit } from '@angular/core';
import { CommonfuncService } from '../commonfunc.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  private cartCount: number = 0;
  constructor(private commonService: CommonfuncService) { 
    this.cartCount = this.commonService.getCartCount();
  }
  toggle(){
    console.log("Toggle triggered");
    this.commonService.toggle();
  }

  ngOnInit() {
    console.log("Toggle triggered");
    this.commonService.toggle();
  }

}
