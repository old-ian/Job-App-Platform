import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {


  @Input() regForm: FormGroup;
  control: FormArray
  mode: boolean
  touchedRows: any

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.addRow()
  }

  ngAfterOnInit() {
    this.control = this.regForm.get('experience') as FormArray
  }

  initiateForm(): FormGroup {
    return this.formBuilder.group({
      organizationName: [''],
      jobTitle: [''],
      dateStarted: [''],
      dateFinished: [''],
      notes: ['']
    });
  }

  addRow() {
    const control = this.regForm.get('experience') as FormArray
    control.push(this.initiateForm())
  }

  deleteRow(index: number) {
    const control = this.regForm.get('experience') as FormArray;
    control.removeAt(index);
  }

  get getFormControls() {
    const control = this.regForm.get('experience') as FormArray
    return control
  }

  submit() {
    console.log(this.regForm);
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
