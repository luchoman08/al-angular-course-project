import { Injectable } from '@angular/core';
/**
 * Service that works as an interface to assets
 *
 * @class AssetsService
 */
@Injectable({
  providedIn: 'root'
})

export class AssetsService {

  constructor() { }
  /**
   * Return the url for default poster image from application assets
   *
   * @returns {string}
   * @memberof AssetsService
   */
  getDefaultPosterImageURL(): string {
    return './assets/img/posters/poster_default.png';
  }
  /**
   * Return the url for default profile image from application assets
   *
   * @returns {string}
   * @memberof AssetsService
   */
  getDefaltProfileImageURL(): string {
    return './assets/img/people/default-profile-men.png';
  }
}
