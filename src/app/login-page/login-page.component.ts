import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LoginPageComponent implements OnInit{


  public loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router ) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:8080/customerapi/customers")
      .subscribe( res => {
       const user= res.find((a:any) =>{
         return a.username === this.loginForm.value.username &&  a.password === this.loginForm.value.password;
       });
       if(user){
         alert("Login success");
         this.loginForm.reset();
         this.router.navigate(['/products']);
       } else{
         alert("Invalid credentials. Please try again!!!");
       }
   
      }, err =>{
        alert("something went wrong !!")
      }
   
      );
    
     }

}

  
     
  

