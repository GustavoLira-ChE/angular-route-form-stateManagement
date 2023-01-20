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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    TemplateDriveFormComponent,
    ModelDriveFormOneComponent,
    ModelDriveFormTwoComponent,
    HomeMessageComponent,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({count:counterReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
