import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {
    this.students = this.studentService.getStudents();
  }

  changeStatus(pos: number) {
    this.studentService.changeStatus(pos);
  }

  newStudent(): void {
    this.router.navigate(['/new-student']);
  }

}
