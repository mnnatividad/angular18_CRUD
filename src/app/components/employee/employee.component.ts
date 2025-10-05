import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { employeeModel } from '../../models/employee';
import { ICrudsvcService } from '../../services/i-crudsvc.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {
  api = inject(ApiService)
  icrudSvc = inject(ICrudsvcService)
  isDataReady : boolean = false


   ngOnInit(): void {
    this.api.getAllEmployees().subscribe((resp: employeeModel[]) => {
      this.icrudSvc.allEmployee = resp;
            console.log(this.icrudSvc.allEmployee)
            this.isDataReady = true

    })
  }
}


