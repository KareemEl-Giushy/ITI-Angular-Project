import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) { }
  getAllPrds():Observable<any> {
    return this.http.get("https://dummyjson.com/products")
  }

  getPrdById(id:number):Observable<any>|null{
    let foundPrd = this.http.get(`https://dummyjson.com/products/${id}`)
    return foundPrd?foundPrd:null
  }
}
