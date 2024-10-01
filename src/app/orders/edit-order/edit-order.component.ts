import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  ngOnInit(): void {
  }
  orderForm: FormGroup;

  constructor(private fb: FormBuilder,private  router: Router) {
    this.orderForm = this.fb.group({
      orderId: ['', Validators.required],          
      orderName: ['', Validators.required],        
      orderDescription: ['', Validators.required], 
      quantity: ['', [Validators.required, Validators.min(1)]],  
      price: ['', [Validators.required, Validators.min(0.01)]]   
    });
  }
}
