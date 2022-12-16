import { AdminProductService } from './../services/admin-product.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-insert',
  templateUrl: './admin-insert.component.html',
  styleUrls: ['./admin-insert.component.css']
})
export class AdminInsertComponent implements OnInit{

  constructor(private insertService:AdminProductService){}

  ngOnInit(): void {
    
  }
  onSubmit(f:NgForm){
    this.insertService.insertProduct(f.value).subscribe((res:string)=>{
      console.log(res);
      alert("The product is inserted successfully !!!");
    })
  }

}
