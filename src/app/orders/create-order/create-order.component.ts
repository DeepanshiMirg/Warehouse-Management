import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { OrderService } from '../Service/order.service';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  orders: any;
  data: any[] = [];
  orderData: any
  orderId: any;
  orderForm: FormGroup;
  orderList: any[] = [];
  currentOrderID: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private orderservice: OrderService,
    private activatedRoute: ActivatedRoute
  ) {
    this.orderForm = this.fb.group({
      // id: ['', Validators.required],          
      Name: ['', Validators.required],
      Price: ['', Validators.required],
      Quantity: ['', Validators.required],
 
    });
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.orderId = this.activatedRoute.snapshot.paramMap.get('id');
      this.abc();
    }
  }

  abc(): void {
    this.orderservice.getOrderDetails().subscribe((data: any) => {
      this.orderList = data.result.data;
      const filteredData = this.orderList.find((item) => item.id == this.orderId);
      this.patchFormData(filteredData);
    })
  }

  // onSubmit(): void {
  //   this.router.navigate(['/orders']);
  //   console.log(this.orderForm.value);
  //   let post = {
  //     // "userId": this.orderForm.userId,
  //     // "id": this.orderForm.id,
  //     // "title": this.orderForm.title,
  //     // "body": this.orderForm.body,
  //     "userId": this.orderForm.get('userId')?.value,
  //     "id": this.orderForm.get('id')?.value,
  //     "title": this.orderForm.get('title')?.value,
  //     "body": this.orderForm.get('body')?.value
  //   }
  //   this.orderservice.getOrderAddDetails(post).subscribe((data: any)=>{
  //     console.log(data);
  //   })

  // onSubmit(): void {
  //   if (this.orderForm.valid) {
  //     // Prepare the post object from form values
  //     let post = {
  //       "userId": this.orderForm.get('userId')?.value,
  //       "id": this.orderForm.get('id')?.value,
  //       "title": this.orderForm.get('title')?.value,
  //       "body": this.orderForm.get('body')?.value
  //     }

  //     // Convert the post object to a JSON string since your service expects a string
  //     this.orderservice.getOrderAddDetails(JSON.stringify(post)).subscribe(
  //       (data: any) => {
  //         // Log the response from the service
  //         console.log(data);

  //         // Navigate after the form is successfully submitted
  //         this.router.navigate(['/orders']);
  //       },
  //       (error: any) => {
  //         console.error('Error occurred:', error);
  //       }
  //     );
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

  // onSubmit(): void {
  //   this.orderData = this.orderForm.value;
  //   console.log(this.orderForm, "ooooooo");
  // //   if (this.orderForm.valid) {
  //     // Extract form values using `.get` and create a post object
  //     let post = {
  //       // "userId": this.orderForm.get('userId')?.value,
  //       "Name": this.orderForm.get('Name')?.value,
  //       "Price": this.orderForm.get('Price')?.value,
  //       "Quantity": this.orderForm.get('Quantity')?.value
  //     };

  //     // Make the POST request and pass the `post` object as data
  //     this.orderservice.getOrderDetails(post).subscribe(
  //       (data: any) => {
  //         this.orders = data;
  //         console.log('Order added successfully:', data);

  //         // After successful submission, navigate to the orders list page
  //         this.router.navigate(['/orders']);
  //       },
  //       (error: any) => {
  //         console.error('Error occurred while adding the order:', error);
  //       }
  //     );
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }
  // }/

  // onSubmit(): void {
    
  //   console.log(this.orderForm.value);
  //   let post = {
  //     Name: this.orderForm.get('Name')?.value,
  //     Price: this.orderForm.get('Price')?.value,
  //     Quantity: this.orderForm.get('Quantity')?.value,
  //   };

  //   this.orderservice.getOrderAddDetails(post).subscribe((data: any) => {
  //     this.orderData = data;
  //     console.log('Order added successfully:', data);
  //     this.router.navigate(['/orders']);
  //   });
  //   const currentOrderID = this.orderId
  //   if(this.orderId != null && this.orderId == undefined){
  //     this.orderservice.UpdateOrderDetails(post,this.currentOrderID).subscribe((data: any)=>{
  //       this.patchFormData(data);

  //     })
  //   }
  // }



  onSubmit(): void {
    const post = {
      Name: this.orderForm.get('Name')?.value,
      Price: this.orderForm.get('Price')?.value,
      Quantity: this.orderForm.get('Quantity')?.value,
    };
  
    // Check if orderId is present to decide between update and create
    if (this.orderId) {
      // If orderId exists, update the order
      this.orderservice.UpdateOrderDetails(post, this.orderId).subscribe(
        (data: any) => {
          console.log('Order updated successfully:', data);
          this.router.navigate(['/orders']);
        },
        (error: any) => {
          console.error('Error updating order:', error);
        }
      );
    } else {
      // If orderId does not exist, create a new order
      this.orderservice.getOrderAddDetails(post).subscribe(
        (data: any) => {
          console.log('Order added successfully:', data);
          this.router.navigate(['/orders']);
        },
        (error: any) => {
          console.error('Error adding order:', error);
        }
      );
    }
  }
  
  patchFormData(data: any): void {

      this.orderForm.patchValue({
        Name: data.Name,
        Price: data.Price,
        Quantity: data.Quantity,
      })
  }
}




// if (this.orderForm.valid) {
//   // Get the form data
//   const orderData = this.orderForm.value;

//   // Retrieve the existing orders from localStorage or initialize an empty array
//   const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');

//   // Add the new order to the array
//   existingOrders.push(orderData);

//   // Store the updated array back to localStorage
//   localStorage.setItem('orders', JSON.stringify(existingOrders));

//   // Optionally, reset the form after submission
//   this.orderForm.reset();
// } else {
//   console.log('Form is invalid');
// }





