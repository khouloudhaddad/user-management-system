import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

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

  constructor(
    private _fb: FormBuilder,
    private _userService: UsersService,
    private _dialogRef: DialogRef<EmpAddEditComponent>
    ) {

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


  onFormSubmit() {

    if(this.userForm.valid){
      console.log(this.userForm.value)
      this._userService.addUser(this.userForm.value).subscribe({
        next:(user: any)=>{
            alert('User added sucessfully');
            this._dialogRef.close()
        },
        error: (err: any)=>{
          console.log(err)
        }
      })
    }

  }

}


