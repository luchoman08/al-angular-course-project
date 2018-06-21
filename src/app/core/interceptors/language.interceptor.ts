import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor() {}
  /**
   * Intercept all the petition to TMdb and append the params 
   * `language` and `include_image_language` if is found some configuration value for this params
   *
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   * @memberof LanguageInterceptor
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const paramsConfig = {
        'language': environment.language,
        'include_image_language': `${environment.language},null`
    };
    const request = req.clone({ setParams: paramsConfig });
    return next.handle(request);
  }
}
