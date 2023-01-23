import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { TemplateDriveFormComponent } from './components/template-drive-form/template-drive-form.component';
import { ModelDriveFormOneComponent } from './components/model-drive-form-one/model-drive-form-one.component';
import { ModelDriveFormTwoComponent } from './components/model-drive-form-two/model-drive-form-two.component';
import { StateManagementContainerComponent } from './components/state-management-container/state-management-container.component';
import { CounterComponent } from './components/counter/counter.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"forms", component: FormsComponent, children:[
    {path:"tdf", component: TemplateDriveFormComponent},
    {path:"mdf1", component: ModelDriveFormOneComponent},
    {path:"mdf2", component: ModelDriveFormTwoComponent}
  ]},
  {path:"state-management", component: StateManagementContainerComponent, children:[
    {path:"counter", component: CounterComponent},
    {path:"complex", component: EmployeeListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
