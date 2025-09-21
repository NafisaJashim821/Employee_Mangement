import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-employee-details',
  standalone: true,                // 🔹 standalone component
  imports: [CommonModule], 
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  employee!: Employee;

  constructor(
    private route: ActivatedRoute, 
    private employeeService: EmployeeService   // ✅ fixed spelling
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }

}
