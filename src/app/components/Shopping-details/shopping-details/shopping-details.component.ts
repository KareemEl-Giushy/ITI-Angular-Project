import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from 'src/app/Services/shopping.service';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingDetailsComponent {
  shopId: number = 0;
  item:any|null = null;
  constructor(private activatedRoute: ActivatedRoute , private shopSer:ShoppingService) {
    this.shopId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.shopSer.getPrdById(this.shopId)?.subscribe(i=>{
      console.log(i)
      this.item = i;
      })

  }

}
