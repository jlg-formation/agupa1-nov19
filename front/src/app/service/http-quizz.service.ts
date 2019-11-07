import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizzService, QuizzMap } from './quizz.service';

@Injectable({
  providedIn: 'root',
})
export class HttpQuizzService extends QuizzService {
  constructor(private http: HttpClient) {
    super();
    console.log('http');
    this.http.get<QuizzMap>('http://localhost:3000/ws/quizz').subscribe({
      next: map => {
        this.map = map;
        this.saveMap();
      },
      error: err => {
        console.error('err: ', err);
      },
    });
  }

  addQuizz() {
    super.addQuizz();
    this.http.post('http://localhost:3000/ws/quizz', this.current).subscribe({
      next: data => {
        console.log('data: ', data);
      },
      error: err => {
        console.error('err: ', err);
      },
    });
  }
}
