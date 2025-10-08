import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../models/interface/employee';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Employee } from '../models/class/emp';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }


  // getAllEmployees(): Observable<employeeModel[]>{
  //   return this.http.get<employeeModel[]>('https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees')
  // }

  // getAllEmployees(): Observable<employeeModel[]> {
  //   return this.http.get<employeeModel[]>(environment.API_URL + 'GetEmployees')
  // }

  getAllEmployees(): Observable<employeeModel[]> {
    return this.http.get<employeeModel[]>(`${environment.API_URL}users`)
  }

  addUpdate (data: Employee): Observable<employeeModel[]> {
    console.log("asd")
    return this.http.post<employeeModel[]>(`${environment.API_URL}users`, data)
  }

  delete (id: number): Observable<employeeModel[]> {
    return this.http.delete<employeeModel[]>(`${environment.API_URL}users/${id}`)
  }

}
