import { Component, inject, OnInit } from '@angular/core';
import { ICrudsvcService } from '../../services/i-crudsvc.service';
import { FormsModule } from '@angular/forms';
import { CrudsvcService } from '../../services/crudsvc.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {
  icrudSvc = inject(ICrudsvcService)
  crudsvc = inject(CrudsvcService)


   ngOnInit(): void {
    this.crudsvc.loadEmployees();
  }
}


