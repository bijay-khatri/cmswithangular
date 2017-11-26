import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ppn-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private activeMenuItem : string;
  constructor() { }

  setActiveMenuItem(menuItem: string){
    this.activeMenuItem = menuItem;
  }

  ngOnInit() {
  }

}
