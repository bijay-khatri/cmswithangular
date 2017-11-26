import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {FeedbackComponent} from '../feedback/feedback.component';

@Component({
  selector: 'ppn-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  feedback(){
    this.dialog.open(FeedbackComponent).afterClosed().subscribe(res =>{
      console.log("Dialog was closed", res);
    });
  }

}
