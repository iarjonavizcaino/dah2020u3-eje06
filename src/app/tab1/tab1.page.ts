import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  students: Student[] = [];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
    console.log(this.students);
  }

  changeStatus(pos: number): void {
    this.studentService.changeStatus(pos);
  }

}
