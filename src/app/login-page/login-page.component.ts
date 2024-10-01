import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  ngOnInit(): void {
  }
  loginForm: FormGroup;

  constructor(private router: Router) {
    // Initialize the form with username and password fields
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log('Form Submitted', this.loginForm.value);
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

  onSubmit() {
    if (this.loginForm.valid) {
      // Perform login (e.g., via API)
      // Assuming login is successful
      localStorage.setItem('token', 'userToken'); // Store a token
      
      // Redirect to orders page
      this.router.navigate(['/orders']);
    }
  }
}
