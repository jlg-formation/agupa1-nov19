import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() duration = 120;

  @Output() dringdring = new EventEmitter<{ msg: string }>();

  counter: number;
  intervalId: any;

  constructor() {}

  ngOnInit() {
    this.reset();
  }

  reset() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = undefined;
    this.counter = this.duration;
    this.intervalId = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
        this.dringdring.emit({msg: 'too late...'});
      }
    }, 1000);
  }
}
