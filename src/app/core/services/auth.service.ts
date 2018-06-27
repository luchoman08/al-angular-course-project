import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { map } from 'rxjs/operators';
import { JwtService } from '@app/core/services/jwt.service';
import { HttpParams } from '@angular/common/http';
import { ApiService } from '@app/core/services/shared';

class RequestToken {
    succes: boolean;
    expires_at: string; // date utc format
    request_token;
}
export class Session {
    succes: boolean;
    session_id: string;
}
@Injectable()

export class AuthService {
    request_token_obj: RequestToken = new RequestToken();
  constructor (
    private apiService: ApiService,
    private jwtService: JwtService
  ) {}

  public createRequestToken(): Observable<RequestToken> {
        return this.apiService.get('/authentication/token/new')
        .pipe(map((request_token_obj: RequestToken) => {
            this.request_token_obj = request_token_obj;
            this.jwtService.saveToken(this.request_token_obj.request_token);
            window.location.href =
              `https://www.themoviedb.org/authenticate/${request_token_obj.request_token}?redirect_to=http://localhost:4200`;
           return request_token_obj;
        }));
  }

  public createSession(): Observable<any> {
      const params: HttpParams = new HttpParams().set('request_token', this.jwtService.getToken());
      return this.apiService.get('/authentication/session/new', params).pipe(
        map(
          response =>  {
          return response;
          }
        )
      );
  }


}

