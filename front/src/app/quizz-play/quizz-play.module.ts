import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzPlayRoutingModule } from './quizz-play-routing.module';
import { ListComponent } from './list/list.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';


@NgModule({
  declarations: [ListComponent, QuestionComponent, ScoreComponent],
  imports: [
    CommonModule,
    QuizzPlayRoutingModule
  ]
})
export class QuizzPlayModule { }
