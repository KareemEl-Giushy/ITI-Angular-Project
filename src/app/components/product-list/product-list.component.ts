import { NgFor } from '@angular/common';
import { Component,Input ,OnChanges } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {

  // catList:Icategory[];
  prdList:Iproduct[];
  newPrdList:Iproduct[]=[];
  @Input() sendCatId:number = 0;
  Total:number=0;

  selectedCatID:number=0;


  constructor(private ordService:OrderService){
    // this.catList=[
    //   {id:1,name:'Cars'},
    //   {id:2,name:'Motorcycle'}

    // ]
    this.prdList=this.ordService.getAllOrders();


  this.newPrdList=this.prdList;
  }





Buy(prdPrice:number , count:any ,prdIndex: number ){

  this.Total += +count * prdPrice;

  this.newPrdList[prdIndex].quantity -= 1;




}

// filterPrd(){
// this.newPrdList=this.prdList.filter(prd=>prd.categoryID==this.selectedCatID);
// }
filterPrds(){
  if(this.sendCatId == 0){
    this.newPrdList = this.prdList;
  }else{

    this.newPrdList = this.prdList.filter(prd=>prd.categoryID == this.sendCatId)
  }
}

ngOnChanges():void{
  this.filterPrds()
}





}
