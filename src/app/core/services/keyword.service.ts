import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/shared';
import { KeywordsInterface } from '@app/core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(
    private apiService: ApiService
  ) { }
  get(id: string | number): Observable<KeywordsInterface> {
    return this.apiService.get('/keyword/' + String(id));
  }
}
