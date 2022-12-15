import { AdminProductService } from './../services/admin-product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit{

  constructor(private service:AdminProductService,
    private router:Router,
    private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    let productId:number;
    this.activatedRoute.params.subscribe((param:Params)=>{
      productId=+param['productId'];
    });
    this.service.deleteProduct(productId).subscribe((resp:String)=>{
      console.log(resp);
      this.router.navigate(['/display'],{relativeTo:this.activatedRoute});
    });
  }

}
