import { Injectable, OnChanges} from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Icategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class OrderService  {
  prdList:Iproduct[];

  constructor() {
    this.prdList=[
    {id:1,name:'Phone 1+',price:3000,quantity:1,imgUrl:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/oneplus_nord_2t_review_5-x800-one_one.jpg?VersionId=MsiBzUvJW3czINYMxzRWjv7Mj5jDyvzp',categoryID:1},
    {id:2,name:'BMW',price:200000,quantity:5,imgUrl:'https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBgnJJOl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uRCRqoQh47wMvcYi9kQC5Mb3islBglUQI8cRScH8ZuMbnMd09RyJGy5BYurQ%25r9Yi5W8zWuE9NqogqaGQFl3ilU%2575cRScHz08MbnMdgsoyJGy5iKErQ%25r9St8W8zWunmHqogqaGsel3ilU%25KBcRScH40iMbnMdeiSyJGy5mSBrQ%25r9sRnW8zWuKSJqogqaDn3l3ilUCGrcRScHbdQMbnMdJoiyJGy5Q3drQ%25r98RiW8zWuonjqogqa3s8l3ilUROzcRScHHQ9MbnMdd8syJGy559KrQ%25r90bFW8zWuBDjqogqaYEdl3ilUEy%25cRScHFrAMbnMdjWOyJGy57qNrQ%25r901yW8zWuDJCqoQEdcNq0zxcqW8JuzM8nq0z6Fboy6oEd82',categoryID:1},
    {id:6,name:'Ducati 1199 Panigale',price:600,quantity:0,imgUrl:'https://motorolamea.vtexassets.com/arquivos/ids/156783-800-auto?width=800&height=auto&aspect=true',categoryID:2},
    {id:6,name:'Ducati 1199 Panigale',price:600,quantity:0,imgUrl:'https://motorolamea.vtexassets.com/arquivos/ids/156783-800-auto?width=800&height=auto&aspect=true',categoryID:2},
    {id:3,name:'Hamada Phone',price:500000,quantity:10,imgUrl:'https://motorolamea.vtexassets.com/arquivos/ids/156783-800-auto?width=800&height=auto&aspect=true',categoryID:1},
    {id:4,name:'2013 XL1200V Seventy-two',price:400000,quantity:2,imgUrl:'https://m.media-amazon.com/images/I/91oheV9xuKL._AC_SX679_.jpg',categoryID:2},
    {id:5,name:'2013 FLHRC Road King Classic',price:200000,quantity:20,imgUrl:'https://m.media-amazon.com/images/I/611gwAM1AiL._AC_SX679_.jpg',categoryID:2},
    {id:6,name:'Ducati 1199 Panigale',price:600000,quantity:1,imgUrl:'https://m.media-amazon.com/images/I/61GIoC-1xTL._AC_SX679_.jpg',categoryID:2},
  ]


  }
  getAllOrders():Iproduct[]{
    return this.prdList;
  }

  getOrderById(prId:number):Iproduct | null{
    let foundedProduct=this.prdList.find(prd=>prd.id==prId)

    return foundedProduct?foundedProduct:null

  }



}
