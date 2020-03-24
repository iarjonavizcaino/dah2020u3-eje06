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
  search: string;

  constructor(private studentService: StudentService, private router: Router) {
    this.clearSearch();
  }

  changeStatus(pos: number) {
    this.studentService.changeStatus(pos);
  }

  newStudent(): void {
    this.router.navigate(['/new-student']);
  }

  private clearSearch(): void {
    this.students = this.studentService.getStudents();
  }

  filter(): void {
    this.clearSearch();

    if (this.search && this.search.trim()) {
      this.students = this.students.filter( (student) => {
        return ((student.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1)
        || (student.controlnumber.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1));
      });
    }
  }

}
