import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { TimerComponent } from './timer/timer.component';
import { FormatDurationPipe } from './format-duration.pipe';
import { RadioButtonComponent } from './radio-button/radio-button.component';



@NgModule({
  declarations: [AutofocusDirective, TimerComponent, FormatDurationPipe, RadioButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, TimerComponent, FormatDurationPipe, RadioButtonComponent]
})
export class WidgetModule { }
