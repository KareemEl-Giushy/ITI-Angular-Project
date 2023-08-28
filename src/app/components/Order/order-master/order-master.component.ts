import { Component } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent {
  selectedCatID:number = 0;
  catList:Icategory[];
  constructor(){
    this.catList = [
      {id:1,name:'cars'},
      {id:2,name:'Motor Cycles'}

    ]
  }
}
