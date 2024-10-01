import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Order {
  Name: string;
  Price: number;
  Quantity: string;
}

@Injectable({
  providedIn: 'root'
})
export class  OrderService {

  orderList: any[] | undefined;

  constructor( private http: HttpClient) { }
  getOrderDetails(): Observable<any>{
    return this.http.get('http://localhost:3000/crud');

  }
//   getOrderAddDetails(data: string){
//     const options = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       }),
//       body:data
//     return this.http.post('https://jsonplaceholder.typicode.com/posts'+ options);
//   }
// }
// getOrderAddDetails(data: string) {
//   const options = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   };

//   return this.http.post('https://jsonplaceholder.typicode.com/posts', data, options);
// }
getOrderAddDetails(data: any) {
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Pass the `data` as the body of the post request
  return this.http.post('http://localhost:3000/crud', data, options);
}

// UpdateOrderDetails(post: any, id: any){
//   return this.http.patch('http://localhost:3000/crud', post, id);
// }
UpdateOrderDetails(post: any, id: any) {
  return this.http.patch(`http://localhost:3000/crud/${id}`, post);
}

deleteOrderDetails(id: any){
  return this.http.delete(`http://localhost:3000/crud/${id}`);
}
// deleteOrderDetails(id: any) {
//   return this.http.delete(`http://localhost:3000/crud/${id}`);
// }

}

// deleteOrderNotes(data){
 
//   }
//   return this.http.delete<any>(environment.WEBSERVICE_URL_ORDER + '/orders/deleteSaveOrderNotes',options);
// }
