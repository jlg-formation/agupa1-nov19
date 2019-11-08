import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizzService } from 'src/app/service/quizz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TimerComponent } from 'src/app/widget/timer/timer.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  questionNbr: number;

  @ViewChild(TimerComponent, { static: false }) timer: TimerComponent;

  f = new FormGroup({
    answer: new FormControl('', Validators.required),
  });

  constructor(
    public quizz: QuizzService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(map(params => +params.questionNbr))
      .subscribe(nbr => (this.questionNbr = nbr));
  }

  submit() {
    const actualAnswer = this.f.value.answer;
    console.log('actualAnswer: ', actualAnswer);
    const expectedAnswer = this.quizz.current.questions[
      this.quizz.progress.questionId
    ].correctAnswer;
    console.log('expectedAnswer: ', expectedAnswer);

    if (actualAnswer === expectedAnswer) {
      this.quizz.progress.score++;
    }
    this.quizz.progress.questionId++;
    this.quizz.saveProgress();
    if (
      this.quizz.progress.questionId === this.quizz.current.questions.length
    ) {
      this.router.navigateByUrl('/score');
      return;
    }
    this.f.reset();
    this.timer.reset();
    this.router.navigateByUrl(
      `/question/${this.quizz.progress.questionId + 1}`
    );
  }

  onTimeout(evt: { msg: string }) {
    console.log('evt: ', evt);
    this.submit();
  }
}
