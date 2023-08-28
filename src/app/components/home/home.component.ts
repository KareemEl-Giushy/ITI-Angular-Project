import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  storeInfo: StoreData;
  isTitle: boolean=true;
  constructor(){
    this.storeInfo=new StoreData('The Page')
  }




toggleTitle(){
  this.isTitle=!this.isTitle;
}


}
