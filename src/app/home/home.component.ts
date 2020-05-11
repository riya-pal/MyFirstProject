import { Component, OnInit, ViewChild } from '@angular/core';
import { DatasourceService } from '../services/datasource.service';
import { Router } from '@angular/router';
import { ResDataModal } from '../modals/resDataModal';
declare var $;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataTable: any;
  dtOptions: any;
  tableData: any = [];
  users: ResDataModal[];
  @ViewChild('dataTable', { static: true }) table;

  constructor(private dataService: DatasourceService, private router: Router) { }

  ngOnInit() {
    this.getDataFromSource();
  }

  getDataFromSource() {
    this.dataService.getData().subscribe(data => {
      this.tableData = data;
      this.dtOptions = {
        data: this.tableData,
        columns: [
          { title: 'ID', data: 'id' },
          { title: 'Name', data: 'name' },
          { title: 'Username', data: 'username' },
          { title: 'Email', data: 'email' },
          // { title: 'Jobtitle', data: 'jobtitle' },
          // { title: 'address', data: 'address' },
          // { title: 'street', data: 'address.street' },
          // { title: 'suite', data: 'address.suite' },
          // { title: 'City', data: 'address.city' },
          // { title: 'zipcode', data: 'address.zipcode' },
          // { title: 'geo', data: 'address.geo' },
          // { title: 'geo lat', data: 'address.geo.lat' },
          // { title: 'geo lng', data: 'address.geo.lng' },
          { title: 'phone', data: 'phone' },
          // { title: 'website', data: 'website' },
          // { title: 'company', data: 'company' },
          // { title: 'Company Name', data: 'company.name' },
          // { title: 'catchPhrase', data: 'company.catchPhrase' },
          // { title: 'bs', data: 'company.bs' },
          {
            "mRender": function (data, type, row) {
              const user = row.id;
              return '<a href=edituser?id=' + row.id + ' click="editUser(' + user + ')">Edit</a>';
            },
          },
          {
            "mRender": function (data, type, row) {
              const user = row.id;
              return '<a href=home?id=' + row.id + ' click="deleteUser(' + user + ')">Delete</a>';
            }
          }
        ],
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print',
        ]
      };
    }, err => { }, () => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
    });
  }
  addUser() {
    console.log('Inside add user');
    this.router.navigate(['adduser']);
  };

  deleteUser(user: ResDataModal) {
    this.dataService.deleteUser(user.id)
      .subscribe(data => {
        // alert('User Deleted successfully');
        this.users = this.users.filter(u => u !== user);
      })
  };
  editUser(user: ResDataModal) {
    console.log('edit user', user);
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edituser']);
  };
}
