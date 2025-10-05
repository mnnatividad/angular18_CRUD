import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<employeeModel[]>{
    return this.http.get<employeeModel[]>('https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees')
  }
}
