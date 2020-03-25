import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { NumericValueAccessor } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Israel',
      controlnumber: '02400391',
      active: true
    });
    this.students.push({
      name: 'Isael',
      controlnumber: '02400392',
      active: false
    });
    this.students.push({
      name: 'Ismael',
      controlnumber: '02400393',
      active: true
    });
  }

  changeStatus(position: number) {
    this.students[position].active = !this.students[position].active;
  }

  getStudents(): Student[] {
    return this.students;
  }

  newStudent(student: Student): void {
    this.students.push(student);
  }

  deleteStudent(position: number): void {
    this.students.splice(position, 1);
  }
}
