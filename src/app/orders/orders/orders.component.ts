import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderService } from '../Service/order.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  // router: any;
  @Input() order: any;
  xyz: any[] = [];
  orders: Order[] = [];

  constructor(private router: Router, private OrderService: OrderService) { }
  // orders: any[] = [];
  ngOnInit(): void {
    // this.getOrdersFromLocalStorage();
  }

  // Method to retrieve orders from localStorage
  // getOrdersFromLocalStorage(): void {
  //   const storedOrders = localStorage.getItem('orders');
  //   if (storedOrders) {
  //     // Parse the JSON string into an array of orders
  //     this.orders = JSON.parse(storedOrders);
  //   }
  // }


  click() {
    this.router.navigate(['../orders/create-order'])
  }
  onclick() {
    this.router.navigate(['../orders/edit-order'])
  }

  abc(): void {
    this.OrderService.getOrderDetails().subscribe((data: any) => {
      this.xyz = data.result.data;
      console.log('abc');
      console.log(data.result.data.orderId);
      console.log(data.result.data, "yyy");
    })
  }


  onOrderCreated(newOrder: Order): void {
    this.orders.push(newOrder);
  }

  edit(data: any) {
    this.router.navigate(['/orders/edit-order/' + data.id]);
  }

  // delete(data: any, id: any){
  //   console.log(id);
  //   this.OrderService.deleteOrderDetails(data,this).subscribe(
  //     (data: any) => {
  //       console.log('Order updated successfully:', data);
  //       this.router.navigate(['/orders']);
  // });
  // }
  delete(id: any): void {
    if (confirm('Are you sure you want to delete this order?')) {
      this.OrderService.deleteOrderDetails(id).subscribe(
        (response: any) => {
          console.log('Order deleted successfully:', response);
          // Refresh the list or navigate if needed
          this.refreshOrders();  // Example method to refresh the order list after deletion
        },
        (error: any) => {
          console.error('Error occurred while deleting order:', error);
        }
      );
    }
  }
  
  // Optional: Create a method to refresh the order list after deleting
  refreshOrders(): void {
    this.OrderService.getOrderDetails().subscribe((data: any) => {
      this.orders = data.result.data;  // Update your order list after deletion
    });
  }
  
}
