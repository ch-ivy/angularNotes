import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: 
  `   
  <h2>Employee List</h2>
  
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

  */
  public employees = [
    {"id" : 1, "name" : "Andrew", "age" : 30 },
    {"id" : 2, "name" : "Brandon", "age" : 25 },
    {"id" : 3, "name" : "Christina", "age" : 26 },
    {"id" : 4, "name" : "Elena", "age" : 28 }
  ]

  constructor() { }

  ngOnInit() {
  }
  
}
