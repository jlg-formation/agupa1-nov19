import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration',
})
export class FormatDurationPipe implements PipeTransform {
  transform(duration: number, pad = 1): any {
    const minute = Math.floor(duration / 60);
    const mm = ('' + minute).padStart(pad, '0');
    const second = duration % 60;
    const ss = ('' + second).padStart(2, '0');
    const result = `${mm}:${ss}`;
    return result;
  }
}
