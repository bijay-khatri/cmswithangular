import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'ppn-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  emailAddress : string;
  feedbackMessage: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(public dialogRef: MatDialogRef<FeedbackComponent>) { }

  ngOnInit() {
  }

  shouldDisable(): boolean {
    return !this.emailAddress || !this.feedbackMessage;
  }

  closeDialog(){
    this.dialogRef.close("ok");
  }

  submitFeedback(){
    let data = {
      email: this.emailAddress,
      feedback: this.feedbackMessage
    };
    console.log(data);
  }

}
