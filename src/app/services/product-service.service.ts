import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any>("http://localhost:8080/productapi/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
