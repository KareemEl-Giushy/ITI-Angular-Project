import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  prd:Iproduct|null = null;
  currentId:number = 0;
 constructor(private ordService:OrderService,private activedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.currentId = Number(this.activedRoute.snapshot.paramMap.get('id'))
    this.prd = this.ordService.getOrderById(this.currentId)
  }
}
