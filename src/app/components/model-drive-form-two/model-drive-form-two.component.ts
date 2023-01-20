import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-drive-form-two',
  templateUrl: './model-drive-form-two.component.html',
  styleUrls: ['./model-drive-form-two.component.scss']
})
export class ModelDriveFormTwoComponent {



  constructor(
    private fb: FormBuilder
  ){}

  mdFormTwo = this.fb.group({
    name:["",[Validators.required, Validators.maxLength(20)]],
    email:["",[Validators.required, Validators.email]],
    address:  this.fb.group({
      street: ["",[Validators.required]],
      city:["",[Validators.required]]
    })
  })

  onSubmit(mdFormTwo: Object){
    console.log(mdFormTwo)
  }

}
