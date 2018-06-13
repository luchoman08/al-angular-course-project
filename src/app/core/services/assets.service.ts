import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor() { }
  getDefaultPosterImageURL(): string {
    return './assets/img/posters/poster_default.png';
  }
  getDefaltProfileImageURL(): string {
    return './assets/img/people/default-profile-men.png';
  }
}
