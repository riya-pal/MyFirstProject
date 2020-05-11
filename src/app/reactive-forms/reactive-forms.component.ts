import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  courseForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Inside onSubmit');
    console.warn(this.courseForm.value);
  }

  private initForm() {
    this.courseForm = new FormGroup({
      'courseName': new FormControl(null, Validators.required),
      'courseDesc': new FormControl(null),
      'courseAmount': new FormControl(null)
    });
  }

}
