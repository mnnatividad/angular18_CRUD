import { Injectable } from '@angular/core';
import { employeeModel } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ICrudsvcService {
  public allEmployee : employeeModel [] = [];
  constructor() { }
}

