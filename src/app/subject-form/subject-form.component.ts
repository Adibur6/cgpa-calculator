// subject-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent {
  subjects: any[] = [];
  result: number | null = null;

  addSubject() {
    this.subjects.push({
      name: '',
      credit: 0,
      obtainGPA: 0
    });
  }

  removeSubject(index: number) {
    this.subjects.splice(index, 1);
  }

  calculateCGPA() {
    let totalCredits = 0;
    let weightedSum = 0;

    for (const subject of this.subjects) {
      totalCredits += subject.credit;
      weightedSum += subject.credit * subject.obtainGPA;
    }

    if (totalCredits === 0) {
      this.result = null;
    } else {
      this.result = weightedSum / totalCredits;
    }
  }
}
