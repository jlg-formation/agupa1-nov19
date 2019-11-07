import { Injectable } from '@angular/core';
import { Quizz } from '../class/quizz';
import { Question } from '../interface/question';
import { Progress } from '../interface/progress';

interface QuizzMap {
  [name: string]: Quizz;
}

@Injectable({
  providedIn: 'root',
})
export class QuizzService {

  current = this.getCurrent();
  map = this.getMap();
  progress = this.getProgress();

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

  setCurrent(q: Quizz) {
    this.current = q;
    this.saveCurrent();
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

  hasQuizz(): boolean {
    return Object.values(this.map).length > 0;
  }

  getArray() {
    return Object.values(this.map);
  }

  initProgress() {
    this.progress = {
      questionId: 0,
      score: 0
    };
    this.saveProgress();
  }

  getProgress(): Progress {
    const str = localStorage.getItem('progress');
    if (!str) {
      return undefined;
    }
    try {
      return JSON.parse(str);
    } catch (error) {
      return undefined;
    }
  }

  saveProgress() {
    localStorage.setItem('progress', JSON.stringify(this.progress));
  }
}
