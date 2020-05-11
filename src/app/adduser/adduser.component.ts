import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DatasourceService } from "../services/datasource.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: DatasourceService) { }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Inside onSubmit function');
    this.apiService.createUser(this.addForm.value)
      .subscribe(data => {
        console.log('data', data);
        this.router.navigate(['home']);
      });
  }
}
