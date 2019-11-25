import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private _url : string = "/assets/data/employees1.json";
  constructor(private http : HttpClient) { }

  getEmployees() : Observable<IEmployee[]>
  {
     return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse)
  {
      return throwError(error.message || "Server Error");
  }
}
