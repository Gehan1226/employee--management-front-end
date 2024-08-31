import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';


@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, NavComponent, ReactiveFormsModule],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {

  public employeeForm: FormGroup;

  constructor(private http: HttpClient) {
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(\+94\d{9}|0\d{9})$/)]),
      departmentId: new FormControl('', [Validators.required]),
      roleId: new FormControl('', [Validators.required])
    });
  }

  addEmployee() {
    console.log('Employee added', this.employeeForm);
    this.http.post("http://localhost:8080/emp-controller/add-employee",this.employeeForm.value).subscribe(
      (data) =>{
        Swal.fire({
          title: "Employed added!",
          text: "Employee Saved to Database",
          icon: "success"
        }); 
        this.employeeForm.reset();
      }
    );
    if (this.employeeForm.invalid) {
      Object.keys(this.employeeForm.controls).forEach(field => {
        const control = this.employeeForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }
  };

  getControl(controlName: string): AbstractControl | null {
    return this.employeeForm.get(controlName);
  }
  
}
