import { inject, Injectable } from '@angular/core';
import { Employee } from '../models/class/emp';
import { ApiService } from './api.service';
import { employeeModel } from '../models/interface/employee';
import { ICrudsvcService } from './i-crudsvc.service';

@Injectable({
  providedIn: 'root'
})
export class CrudsvcService {
  icrudSvc = inject(ICrudsvcService)
  api = inject(ApiService)



  loadEmployees() {
    this.api.getAllEmployees().subscribe((resp: employeeModel[]) => {
      this.icrudSvc.employeeList = resp;
      console.log(this.icrudSvc.employeeList)
      this.icrudSvc.isDataReady = true
    })
  }

  
  onSaveEmployee() {
    this.api.addUpdate(this.icrudSvc.empObj).subscribe((resp : any) => {
      if(resp){
    console.log(resp)
            alert("Success!!")

      this.icrudSvc.employeeList.push(resp)
      }else{
        alert("Errr!!")
      }
    })
  }

  onDelete(id: any){
    this.api.delete(id).subscribe((resp : any) => {
      if(resp){
    console.log(resp)
        alert("Successfully deleted!!")
            this.icrudSvc.employeeList = this.icrudSvc.employeeList.filter(employee => employee.id !== id);

      }else{
        alert("Errr!!")
      }
    })
  }

}
