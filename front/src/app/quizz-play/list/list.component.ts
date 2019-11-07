import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/service/quizz.service';
import { Router } from '@angular/router';
import { Quizz } from 'src/app/class/quizz';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public quizz: QuizzService, private router: Router) {}

  ngOnInit() {}

  select(q: Quizz) {
    this.quizz.setCurrent(q);
    this.quizz.initProgress();
    this.router.navigate(['/', 'question', 1]);
  }
}
