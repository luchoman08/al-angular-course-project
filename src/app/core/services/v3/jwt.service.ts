import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): string {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: string) {
    window.localStorage['jwtToken'] = token;
  }
  addSession( session_id: string) {
    window.localStorage["session_id"] = session_id;
  }
  getSessionId() {
    return window.localStorage.getItem['session_id'];
  }
  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
