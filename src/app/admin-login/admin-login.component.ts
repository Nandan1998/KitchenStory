import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class AdminLoginComponent implements OnInit {

  public loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:8080/adminapi/admins")
      .subscribe( res => {
       const user= res.find((a:any) =>{
         return a.username === this.loginForm.value.username &&  a.password === this.loginForm.value.password;
       });
       if(user){
         alert("Login success");
         this.loginForm.reset();
         this.router.navigate(['/adminoptions']);
       } else{
         alert("Invalid credentials. Please try again!!!");
       }
   
      }, err =>{
        alert("something went wrong !!")
      }
   
      );
    
     }

}
