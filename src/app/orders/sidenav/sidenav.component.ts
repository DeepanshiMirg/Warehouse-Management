import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  // isOpen = false;

  // toggleSidenav() {
  //   this.isOpen = !this.isOpen;
  // }


  // @Input() isVisible: boolean = false; // Input to control visibility

  // // Toggle function to change visibility
  // toggle() {
  //   this.isVisible = !this.isVisible;
  // }
 
  isVisible: boolean = false; // Controls the visibility of the sidenav

  toggleSidenav() {
    this.isVisible = !this.isVisible; // Toggle the sidenav visibility
  }

}
