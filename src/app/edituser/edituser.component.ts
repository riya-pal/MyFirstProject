import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DatasourceService } from '../services/datasource.service';
import { ResDataModal } from '../modals/resDataModal';
import { first } from "rxjs/operators";




@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user: ResDataModal;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DatasourceService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    console.log('userId', userId);
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['home']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.dataService.getUserById(+userId)
      .subscribe(data => {
        console.log('Data', data);
        this.editForm.setValue(data);
      });
  }
  onSubmit() {
    this.dataService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            alert('User updated successfully.');
            this.router.navigate(['home']);
          } else {
            alert('Not updated');
          }
        },
        error => {
          alert(error);
        });
  }
}
