import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/service/quizz.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  questionNbr: number;

  constructor(public quizz: QuizzService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .pipe(map(params => +params.questionNbr))
      .subscribe(nbr => (this.questionNbr = nbr));
  }
}
