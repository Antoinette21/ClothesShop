import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent implements OnInit {

  private user: User = {
      id: '',
      fullName: '',
      address: '',
      phone: 0,
      email: '',
      password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  public getUser(): User {
    return this.user;
  }

  public setUser(user: User): void {
    this.user = user;
  }

  public logIn(form: any): void {
    console.log(form?.email);
    console.log(form?.password);
  }
}
