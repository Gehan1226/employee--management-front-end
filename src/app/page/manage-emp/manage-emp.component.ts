import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule,NavComponent],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {

  constructor(private http : HttpClient){}

  public employeeObj = {
    firstName :undefined,
    lastName : undefined,
    email : undefined,
    departmentId : undefined,
    roleId : undefined
  };

  addEmployee(){
    this.http.post("http://localhost:8080/emp-controller/add-employee",this.employeeObj).subscribe(
      (data) =>{
        Swal.fire({
          title: "Employed added!",
          text: "Employee Saved to Database",
          icon: "success"
        }); 
        this.clearEmployee();
      }
    );
  };

  clearEmployee(){
    this.employeeObj.firstName = undefined;
    this.employeeObj.lastName = undefined;
    this.employeeObj.email = undefined;
    this.employeeObj.departmentId = undefined;
    this.employeeObj.roleId = undefined;
  }

}
