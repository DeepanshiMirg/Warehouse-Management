import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('token'); // Assuming token is stored after login
    
    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
    
    return true; // If logged in, allow access to route
  }
}
