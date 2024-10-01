import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'edit-order/:id', component: CreateOrderComponent },
  // { path: 'edit-order', component: EditOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
