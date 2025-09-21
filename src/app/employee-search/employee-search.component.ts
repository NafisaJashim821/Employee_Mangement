import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-search',
  standalone: true,
 imports: [CommonModule, FormsModule], // ✅ standalone component imports
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {

  startDate!: string;
  endDate!: string;
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  onSearch() {
    if (this.startDate && this.endDate) {
      this.employeeService.searchEmployeesByDate(this.startDate, this.endDate)
        .subscribe(data => {
          this.employees = data;
        });
    }
  }
}
