import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() duration = 120;

  @Output() dringdring = new EventEmitter<{ msg: string }>();

  counter$: Observable<number>;

  constructor() {}

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.counter$ = interval(1000).pipe(
      map(x => x + 1),
      startWith(0),
      take(this.duration + 1),
      map(x => this.duration - x),
      map(x => {
        console.log('x: ', x);
        if (x === 0) {
          this.dringdring.emit({ msg: 'too late...' });
        }
        return x;
      })
    );
  }
}
