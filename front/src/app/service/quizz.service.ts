import { Injectable } from '@angular/core';
import { Quizz } from '../class/quizz';
import { Question } from '../interface/question';

interface QuizzMap {
  [name: string]: Quizz;
}

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  current = this.getCurrent();
  map = this.getMap();

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

  addQuestion(question: Question) {
    this.current.questions.push(question);
    this.saveCurrent();
  }

  addQuizz() {
    this.map[this.current.name] = this.current;
    this.saveMap();
  }

  getMap(): QuizzMap {
    const str = localStorage.getItem('map');
    if (!str) {
      return {};
    }
    try {
      const map: QuizzMap = JSON.parse(str);
      for (const q of Object.values(map)) {
        Object.setPrototypeOf(q, Quizz.prototype);
      }
      return map;
    } catch (error) {
      return {};
    }
  }

  saveMap() {
    localStorage.setItem('map', JSON.stringify(this.map));
  }
}
