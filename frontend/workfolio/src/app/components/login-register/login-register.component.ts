import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isLoginMode = true; // This will toggle between login and register forms

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Handle login
      console.log('Login successful!');
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      // Handle registration
      console.log('Registration successful!');
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    console.log('Toggled: isLoginMode = ', this.isLoginMode); // Debugging log
  }
  
}
