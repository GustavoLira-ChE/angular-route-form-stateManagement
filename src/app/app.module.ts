import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { TemplateDriveFormComponent } from './components/template-drive-form/template-drive-form.component';
import { ModelDriveFormOneComponent } from './components/model-drive-form-one/model-drive-form-one.component';
import { ModelDriveFormTwoComponent } from './components/model-drive-form-two/model-drive-form-two.component';
import { HomeMessageComponent } from './components/home-message/home-message.component';
import { MyHighlightDirective } from './directives/my-highlight.directive';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/reducer/reducer';
import { CounterComponent } from './components/counter/counter.component';
import { StateManagementContainerComponent } from './components/state-management-container/state-management-container.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { employeeReducer } from './state/reducer/employee.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    TemplateDriveFormComponent,
    ModelDriveFormOneComponent,
    ModelDriveFormTwoComponent,
    HomeMessageComponent,
    MyHighlightDirective,
    CounterComponent,
    StateManagementContainerComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({count:counterReducer, employees: employeeReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
