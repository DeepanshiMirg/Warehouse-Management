import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @ViewChild(SidenavComponent) sidenav!: SidenavComponent;

  // toggleSidenav() {
  //   this.sidenav.toggleSidenav(); // Call the toggle method
  // }
  // isOpen = false;

  // toggleSidenav() {
  //   this.isOpen = !this.isOpen;
  // }
  // isSidenavVisible: boolean = false; // Control variable

  // toggleSidenav() {
  //   this.isSidenavVisible = !this.isSidenavVisible; // Toggle the sidenav
  // }
 isVisible: boolean = false; 



 // State to control sidenav visibility

  // Function to toggle the sidenav visibility
  toggleSidenav() {
    this.isVisible = !this.isVisible;
  }
}
