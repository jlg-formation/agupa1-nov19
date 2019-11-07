import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/service/quizz.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  f = new FormGroup({
    label: new FormControl('Quelle est la capitale de la France ?', [
      Validators.required,
      Validators.maxLength(200),
    ]),
    answerA: new FormControl('Paris', Validators.required),
    answerB: new FormControl('Berlin', Validators.required),
    answerC: new FormControl('Londres', Validators.required),
    answerD: new FormControl('Bruxelles', Validators.required),
    correctAnswer: new FormControl('', Validators.required),
  });

  constructor(public quizz: QuizzService, private router: Router) {}

  ngOnInit() {}

  submit() {
    console.log('submit');
    this.router.navigateByUrl('/setup');
  }
}
