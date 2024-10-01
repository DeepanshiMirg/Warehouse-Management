import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeadersComponent } from './headers/headers.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS , HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    OrdersComponent,
    SidenavComponent,
    HeadersComponent,
    CreateOrderComponent,
    EditOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule  
  ],
  providers:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
  bootstrap: [OrdersComponent]
})


export class OrdersModule { }
