import { Component, OnInit } from '@angular/core';
import { faSmileWink } from '@fortawesome/free-regular-svg-icons';
import { QuizzService } from 'src/app/service/quizz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  faSmileWink = faSmileWink;

  constructor(public quizz: QuizzService) { }

  ngOnInit() {
  }

}
