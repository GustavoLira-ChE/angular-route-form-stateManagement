import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/state/state/employee.state';
import { addEmployee, deleteEmployee } from "../../state/actions/employee.action"

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

  employeeList$: Observable<Employee[]>

  constructor(
    private store: Store<{employees: Employee[]}>,
    private fb: FormBuilder
    ){
    this.employeeList$ = this.store.select('employees');
  }

  employeeForm = this.fb.group({
    id: ["",[Validators.required]],
    name: ["",[Validators.required]]
  })

  addEmployee(value: any){
    let newEmployee: Employee = value;
    this.store.dispatch(addEmployee(newEmployee));
  }

  deleteEmployee(value: any){
    let newEmployee: Employee = value;
    this.store.dispatch(deleteEmployee(newEmployee));
  }

}
