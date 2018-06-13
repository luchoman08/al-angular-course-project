import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indefiniteArticle'
})
export class IndefiniteArticlePipe implements PipeTransform {

  transform( word: string ): string {
    let isVowelFirstChar = ['a', 'e', 'i', 'o', 'u'].indexOf(word.charAt(0).toLowerCase()) !== -1;
    let article: string = '';
    isVowelFirstChar? article = 'an' : article = 'a';
    return article; 
  }

}
