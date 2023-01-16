import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../styles.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService){

  }

  ngOnInit(): void {
    
  }

  login(form:NgForm){
    const email=form.value.email
    const password=form.value.password
    this.loginService.login(email, password);
  }

  }
