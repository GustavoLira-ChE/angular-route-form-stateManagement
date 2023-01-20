import { Component } from '@angular/core';

@Component({
  selector: 'app-template-drive-form',
  templateUrl: './template-drive-form.component.html',
  styleUrls: ['./template-drive-form.component.scss']
})
export class TemplateDriveFormComponent {


  onSubmit(formObj: Object){
    console.log(formObj);
  }
}
