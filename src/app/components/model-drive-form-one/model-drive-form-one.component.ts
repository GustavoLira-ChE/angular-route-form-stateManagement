import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-model-drive-form-one',
  templateUrl: './model-drive-form-one.component.html',
  styleUrls: ['./model-drive-form-one.component.scss']
})
export class ModelDriveFormOneComponent {

  mdFormOne = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl()
    })
  })

  onSubmit(mdFormOne: Object){
    console.log(mdFormOne);
  }
}
