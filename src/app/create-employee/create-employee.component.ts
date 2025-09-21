import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms'; 
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';   

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],   
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (data: any) => {
        console.log('Employee saved:', data);
        this.goToEmployeeList();
      },
      error: (err: HttpErrorResponse) => {   // ✅ typed properly
        console.error('Error saving employee:', err);
      }
    });
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log('Form submitted:', this.employee);
    this.saveEmployee();
  }
}
