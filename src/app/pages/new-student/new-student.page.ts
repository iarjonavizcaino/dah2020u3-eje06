import { Component, OnInit } from '@angular/core';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private service: StudentService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  saveStudent() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.service.newStudent({
        name: this.myForm.get('name').value,
        controlnumber: this.myForm.get('controlNumber').value,
        active: false
      });
    }
  }

  initializeForm(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      controlNumber: ['', Validators.compose([Validators.required])]
    });
  }
}
