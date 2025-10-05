import { Routes } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DesignationComponent } from './components/designation/designation.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'employee',
        pathMatch:'full'
    },
    {
        path:'employee',
        component: EmployeeComponent
    },
    {
        path:'department',
        component: DepartmentComponent
    },
    {
        path:'designation',
        component: DesignationComponent
    }
    
];
