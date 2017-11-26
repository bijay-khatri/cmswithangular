import { Component, OnInit } from '@angular/core';

import {MenuService} from '../services/menu-service/menu.service';
import MenuItem from '../entities/menu';

@Component({
  selector: 'ppn-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private activeMenuItem : string;
  private menuList : Array<MenuItem> = [];
  constructor(private menuService: MenuService) { }

  setActiveMenuItem(menuItem: string){
    this.activeMenuItem = menuItem;
  }

  ngOnInit() {
      this.readMenu();
  }

  private readMenu() {
    this.menuService.getMenu().subscribe(res => {
      this.menuList = res.json().menu;
      this.menuList.sort((item1, item2) => item1.order - item2.order)
      console.log(this.menuList);
    });
  }

}
