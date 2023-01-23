import { createAction } from "@ngrx/store";
import { Employee } from "../state/employee.state";

export const addEmployee = createAction("[Employee] add employee", (e: Employee) => e);
export const deleteEmployee = createAction("[Employee] delete Employee", (e: Employee) => e);
