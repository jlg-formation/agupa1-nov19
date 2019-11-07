import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/service/quizz.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });

  constructor(
    private router: Router,
    private quizz: QuizzService
    ) {}

  ngOnInit() {}

  submit() {
    this.quizz.init(this.f.value.name as string);
    this.router.navigateByUrl('/setup');
  }
}
