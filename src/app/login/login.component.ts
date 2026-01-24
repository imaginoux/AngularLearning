import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../Services/user-login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],   // ✅ REQUIRED for ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = 'abhishek@gmail.com';
  password = 'Abcd123';
  errorMessage = '';

  constructor(private router: Router, private userService: UserLoginService) {}  //Router this also service , In buit service , angular provide

  login() {


    this.userService.loginUser(this.email,this.password)
    .subscribe({
      next: (result)=>{
        debugger;
        if(result.status=='Success'){
          const user=result.data;
          this.userService.setUser(user);
          this.router.navigate(['/']);
        }
        else {
          this.errorMessage=result.message;
        }
      },
      error: (err)=>{
        debugger;
      }
    })

    if (this.email === 'admin@gmail.com' && this.password === '12345') {
      const userData= {
        userName: "Abhay"
      }
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
