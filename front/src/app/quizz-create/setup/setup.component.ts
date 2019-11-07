import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/service/quizz.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(public quizz: QuizzService) { }

  ngOnInit() {
  }

}
