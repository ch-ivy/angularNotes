import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  template:`

  <h2> Employee Details</h2>
  <ul *ngFor = "let info in employees" [style.font-size] = "'16px'">
        <li>{{info.id}}. {{info.name}} - {{info.age}}yrs Old. </li>
  </ul>
  `,
  styles:[``]
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
