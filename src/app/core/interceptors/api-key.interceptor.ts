import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}
  /**
   * Intercept all the request to the TMdb api and add the `api_key` param before to make the petition
   *
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   * @memberof ApiKeyInterceptor
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const paramsConfig = {
        'api_key': environment.apiTMDB_Key_V3
    };
    const request = req.clone({ setParams: paramsConfig });
    return next.handle(request);
  }
}
