import { Injectable } from '@angular/core';
import { employeeModel } from '../models/interface/employee';
import { Employee } from '../models/class/emp';

@Injectable({
  providedIn: 'root'
})
export class ICrudsvcService {
  // public allEmployee : employeeModel [] = [];
  public  empObj: Employee = new Employee;
  public  employeeList: Employee[] = [];
  public isDataReady : boolean = false
  constructor() { }
}

