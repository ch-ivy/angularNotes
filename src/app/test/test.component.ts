import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-test',
  template: 
  `   
  <h2>Employee List</h2>

  <h2> {{errorMsg}} </h2>
  <ul *ngFor = "let ones of employees" [style.font-size] = "'16px'">
        <li>{{ones.name}}</li>
  </ul>
  `,
  styles: [`
 
  `]
})
export class TestComponent implements OnInit {
  /* 
    Interpolation can only work with string values = {{value}}
    Property binding [property] = "prop"
    Class Binding [class] = "class"
    Style Binding [style] = "style"; [ngStyles]
    Event Binding = (event) = "method"
    Template reference =  #variablename
    Two way binding = [(ngModel)] = 'property'
    ng if directive = *ngIf = ""; then templatereferencevar ; else tRV
    ng switch = [ngSwitch] = "variable"
          --*ngSwitchCase = ""; *ngSwitchDefault--
    ng for = *ngFor = "loop" then loop result with interpolation in html, 
          can detect index, and position of element in the array 
    Parent-Child Component interaction with data binding and event binding
   Pipes are string format keywords, texts would be displayed in with "|" sign in interpolated variables
    services are made in angular cli for dependency injection
    To create a service, Define the a class for the service, Register the injector, Declare as dependency in components variable classes
    
    HTTP and Observables => Observables are asynchronous HTTP responses to GET requests that is recieved by a service
    then converted and assigned to subscribed components as data.
    first import httpclinet module in module tab, include it in imports, inject it as dependency in service
    which creates a reffernce to http variable, then it's passed to the GET method, wich returns an observable convered by creating an interface that returns an observable
    as an understandable data to only components that subscribe to it! data is assigned to a property in the class and bind it to the view!!
    
    HTTP Error Handling is used to throw the 404 error information or any error message 
    made for components subscribed to the observable
    
    */
  public employees = [];
  public errorMsg;

  constructor(private _employeeServiceService : EmployeeServiceService) { }

  ngOnInit() {
   this._employeeServiceService.getEmployees()
    .subscribe(data => this.employees = data,
               error => this.errorMsg = error);
  }
  
}
