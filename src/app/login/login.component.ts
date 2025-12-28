import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],   // ✅ REQUIRED for ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}  //Router this also service , In buit service , angular provide

  login() {
    if (this.email === 'admin@gmail.com' && this.password === '12345') {
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
