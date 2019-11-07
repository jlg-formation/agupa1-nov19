import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/service/quizz.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  questionNbr: number;

  f = new FormGroup({
    answer: new FormControl('', Validators.required),
  });

  constructor(public quizz: QuizzService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .pipe(map(params => +params.questionNbr))
      .subscribe(nbr => (this.questionNbr = nbr));
  }
}
