import { Component } from '@angular/core';
import { ShoppingService } from 'src/app/Services/shopping.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  shopCart:any[] = [];
  constructor(private shopService: ShoppingService) {
    this.shopService.getAllPrds().subscribe(d=>{
      console.log(d.products)
      this.shopCart = d.products;
    })
  }
}
