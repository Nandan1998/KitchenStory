import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../model/product.model'

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  private url:string = "http://localhost:8080/productapi/products";

  constructor(private httpClient:HttpClient) {}

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url);
  }

  deleteProduct(productId:number):Observable<string>{
    return this.httpClient.delete<string>(this.url+`/${productId}`);
  }

  insertProduct(product:Product):Observable<string>{
    return this.httpClient.post<string>(this.url,product);
  }
}
