import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './auth.guard'; 

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  // Route to the login page
  { path: 'login', component: LoginPageComponent },
  {
    path: 'orders',
    loadChildren:   () => import('./orders/orders.module').then(m => m.OrdersModule),
    // canActivate: [AuthGuard]
  },
  
  { path: '**', redirectTo: '/login' }
  // {
  //   path: '',
  //   redirectTo: '/orders',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
