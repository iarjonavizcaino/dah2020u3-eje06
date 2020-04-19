import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  students: Student[] = [];
  search: string;

  constructor(private studentService: StudentService, private router: Router,
              private alert: AlertController) {
    this.clearSearch();
  }

  operation(pos: number, ev: {detail: { side }}) {
    const side = ev.detail.side;
    if (side === 'start') {
      this.studentService.changeStatus(pos);
    } else {
      this.showAlert(pos);
    }
  }

  async showAlert(pos: number) {
    const al = await this.alert.create({
      header: 'Confirmar',
      message: '¿Seguro que desea eliminar?',
      buttons: [{
        text: 'No',
        handler: () => {}
      }, {
        text: 'Si',
        handler: () => {
          this.studentService.deleteStudent(pos);
          this.filter();
        }
      }]
    });
    await al.present();
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
