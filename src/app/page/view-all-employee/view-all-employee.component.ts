import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from "../../common/nav/nav.component";

@Component({
  selector: 'app-view-all-employee',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, NavComponent],
  templateUrl: './view-all-employee.component.html',
  styleUrl: './view-all-employee.component.css'
})
export class ViewAllEmployeeComponent {
  public employeeList: any;

  public selectedEmployee = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    departmentId: "",
    roleId: ""
  };

  constructor(private http: HttpClient) {
    this.loadEmployeeTable();
  }

  loadEmployeeTable() {
    this.http.get("http://localhost:8080/emp-controller/get-all").subscribe(
      res => {
        this.employeeList = res;
      }
    )
  }

  deleteEmployee(employee: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/emp-controller/delete-emp/${employee.id}`, { responseType: 'text' })
          .subscribe(res => {
            this.loadEmployeeTable();
            console.log(res);

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });

          })

      }
    });
  }

  updateEmployee(employee: any) {
    if(employee!=null){
      this.selectedEmployee = employee;
    }
  }

  saveUpdatedEmployee(){
    this.http.put("http://localhost:8080/emp-controller/update-employee", this.selectedEmployee).subscribe(res => {
      console.log(res);
    })
  }

}
