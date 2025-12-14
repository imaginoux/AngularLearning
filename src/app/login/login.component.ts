import { Component } from '@angular/core';
import {  user } from '../Models/login';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user!: user
}
