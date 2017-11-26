import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ppn-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  private expandedMenuClicked : boolean = false;
  constructor() { }

  expandMenu(){
    this.expandedMenuClicked = !this.expandedMenuClicked;
  }

  handleSubMenu(subMenu){
    this.expandedMenuClicked = false;
  }

  ngOnInit() {
  }

}
