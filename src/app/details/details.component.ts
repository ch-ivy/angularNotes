import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-details',
  template:`

  <h2> Employee Details</h2>
  <h2> {{errorMsg}} </h2>
  <ul *ngFor = "let info of employees" [style.font-size] = "'16px'">
        <li>{{info.id}}. {{info.name}} - {{info.age}}yrs Old. </li>
  </ul>
  `,
  styles:[``]
})
export class DetailsComponent implements OnInit {
    public employees = [];
    public errorMsg;

  constructor(private _employeeServiceService : EmployeeServiceService) { }

  ngOnInit() {
      this._employeeServiceService.getEmployees()
      .subscribe(data => this.employees = data,
          error => this.errorMsg = error);
  }

}
