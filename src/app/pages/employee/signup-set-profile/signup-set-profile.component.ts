import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup-set-profile',
  templateUrl: './signup-set-profile.component.html',
  styleUrls: ['./signup-set-profile.component.scss']
})
export class SignupSetProfileComponent implements OnInit {

  registrationForm: FormGroup;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }


  ngOnInit() {
    this.registrationForm = new FormGroup({
      'personalDetails': new FormGroup({
        'middle_name': new FormControl(null, Validators.required),
        'phone_number': new FormControl(null),
        'address': new FormControl(null, Validators.required),
        'birth_date': new FormControl(null, Validators.required),
      }),
      'education': new FormGroup({
        'highschool': new FormControl(null, Validators.required),
        'college': new FormControl(null), 
        'college_degree': new FormControl(null),
        'college_graduation_date': new FormControl(null),
        'masteral': new FormControl(null),
        'masteral_degree': new FormControl(null),
        'masteral_graduation_date': new FormControl(null),
      }),
      'experience': new FormArray([]),
      'resume': new FormGroup({
        'file': new FormControl(null, Validators.required),
      }),
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  get getFormControls() {
    const control = this.registrationForm.get('experience') as FormArray
    return control
  }
  checkForm() {
    if (this.getFormControls.value.length === 0) {
      return false;
    } else {
      const checkedData = this.getFormControls.value[0].organizationName !== '' && this.getFormControls.value[0].jobTitle &&
        this.getFormControls.value[0].dateStarted && this.getFormControls.value[0].dateFinished;
      return checkedData;
    }
  }
}
