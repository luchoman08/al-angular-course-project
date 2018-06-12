import { Pipe, PipeTransform } from '@angular/core';
/**
 * Sort media elements (people, movie and tv), can be nested in the same array SortMediaPipe or not
 * @export
 * @class SortMediaPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'sortMedia'
})
/** */
export class SortMediaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
