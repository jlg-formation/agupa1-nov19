import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [AutofocusDirective, TimerComponent],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, TimerComponent]
})
export class WidgetModule { }
