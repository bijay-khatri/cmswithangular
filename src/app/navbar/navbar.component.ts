import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'ppn-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private activeMenuItem : string;
  private menuList : Array<{
    id: number,
    slug: string,
    name: any,
    order: number,
    active: boolean,
    subMenuId: number
  }> = [];
  constructor(private http: Http) { }

  setActiveMenuItem(menuItem: string){
    this.activeMenuItem = menuItem;
  }

  ngOnInit() {
     this.http.get('assets/temp.json').subscribe(res => {
          this.menuList = res.json().menu;
          this.menuList.sort((item1, item2) => item1.order - item2.order)
          console.log(this.menuList);
      });
  }

}
