import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { TimerComponent } from './timer/timer.component';
import { FormatDurationPipe } from './format-duration.pipe';



@NgModule({
  declarations: [AutofocusDirective, TimerComponent, FormatDurationPipe],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, TimerComponent, FormatDurationPipe]
})
export class WidgetModule { }
