import { environment } from '@env/environment';
import { ApiService } from '@app/core/services/shared/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiImagesService extends ApiService {
    constructor( private httpClient: HttpClient ) {
      super(httpClient);
      this.api_url  = environment.imagesTMDB_URL;
    }
}
