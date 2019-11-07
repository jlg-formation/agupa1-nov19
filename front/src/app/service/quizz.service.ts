import { Injectable } from '@angular/core';
import { Quizz } from '../class/quizz';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  current = this.getCurrent();

  constructor() {}

  init(name: string) {
    this.current = new Quizz();
    this.current.name = name;
    this.saveCurrent();
  }

  saveCurrent() {
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  getCurrent(): Quizz {
    const str = localStorage.getItem('current');
    if (!str) {
      return undefined;
    }
    try {
      const quizz: Quizz = JSON.parse(str);
      Object.setPrototypeOf(quizz, Quizz.prototype);
      return quizz;
    } catch (error) {
      return undefined;
    }
  }
}
