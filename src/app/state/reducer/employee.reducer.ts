import { createReducer, on } from '@ngrx/store';
import { Employee, initialState } from '../state/employee.state';
import { addEmployee, deleteEmployee } from '../actions/employee.action';

export const employeeReducer = createReducer(
  initialState,
  on(addEmployee, (state, newEmployee: Employee) => [...state, newEmployee]),
  on(deleteEmployee, (state, e: Employee) => {
    return state.filter(em => filterByIdName(em,e));
  }),
);

function filterByIdName(employeeFromArray:Employee,employeeBeenChecking:Employee){
  if(employeeFromArray.id == employeeBeenChecking.id && employeeFromArray.name == employeeBeenChecking.name){
    return false;
  }
  return true;
}
