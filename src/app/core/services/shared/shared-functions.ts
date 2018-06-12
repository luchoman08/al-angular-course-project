import { HttpParams } from '@angular/common/http';

 /**
   * Get params to image and videos append to response; see https://developers.themoviedb.org/3/getting-started/append-to-response
   */
export function paramsAppendToResponse(params: string[]): HttpParams {
        return new HttpParams().set('append_to_response', params.join(','));
}
