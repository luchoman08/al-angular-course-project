import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
/**
 * Return duration in human readable format with input of minutes (english only)
 * @param value Duration in minutes
 * @return duration in format 1h 23m 
 */
  transform(minutes: string|number): string {
    minutes = Number(minutes);
    let duration: string = '';
    let minutes_aux, hours: number;
    hours = Math.floor( minutes / 60 );
    minutes_aux = minutes % 60;
    if( hours > 0) {
      duration = duration.concat(`${hours}h`)
    }
    duration = duration.concat(` ${minutes_aux}m`);
    return duration;
  }

}
