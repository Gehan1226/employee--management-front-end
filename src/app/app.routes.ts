import { Routes } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewAllEmployeeComponent } from './page/view-all-employee/view-all-employee.component';
import { HomePageComponent } from './page/home-page/home-page.component';

export const routes: Routes = [
    {
        path : "add-employee",
        component : ManageEmpComponent
    },
    {
        path : "view-all-employee",
        component : ViewAllEmployeeComponent
    },
    {
        path : "",
        component :  HomePageComponent
    }
];
