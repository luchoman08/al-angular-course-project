import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';
import { ImageSizeValueModel } from '@app/core/';

@Pipe({
  name: 'imageURL'
})
export class ImageURLPipe implements PipeTransform {
    api_url  = environment.imagesTMDB_URL;
    transform(path: string, size: ImageSizeValueModel): string  {
    return `${this.api_url}/${size.name}${path}`;

    }
  }
