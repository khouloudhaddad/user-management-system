import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {

  userForm: FormGroup;

  education: string[] = [
    "Matric",
    "Diploma",
    "Intermediate",
    "Graduate",
    "Post Graduate"
  ];

  onFormSubmit() {
    if(this.userForm.valid){
      console.log(this.userForm.value)
    }
  }

  constructor(private _fb: FormBuilder) {

    this.userForm = this._fb.group({
      firsName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''
    });

  }

}


