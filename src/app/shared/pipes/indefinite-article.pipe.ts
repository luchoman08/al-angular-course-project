import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indefiniteArticle'
})
export class IndefiniteArticlePipe implements PipeTransform {

  transform( word: string ): string {
    let article: string = '';
    if( word && word !== '' ) {
    let isVowelFirstChar = ['a', 'e', 'i', 'o', 'u'].indexOf(word.charAt(0).toLowerCase()) !== -1;
    article = isVowelFirstChar?  'an' : 'a';
    } else {
      article = '';
    }
    return article; 
  }

}
