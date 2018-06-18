import { HttpParams } from '@angular/common/http';
import { MovieAppendToResponseOptions, PersonAppendToResponseOptions } from '@app/core/models';

 /**
   * Get params to image and videos append to response; see https://developers.themoviedb.org/3/getting-started/append-to-response
   */
export function paramsAppendToResponseMoviesAndTv(options: MovieAppendToResponseOptions): HttpParams {
        const append_to_response = new Array<string>();
        options.videos ? append_to_response.push('videos') : null;
        options.images ? append_to_response.push('images') : null;
        options.keywords ? append_to_response.push('keywords') : null;
        options.credits ? append_to_response.push('credits') : null;
        options.reviews ? append_to_response.push('reviews') : null;
        options.similar ? append_to_response.push('similar') : null;
        return new HttpParams().set('append_to_response', append_to_response.join(','));
}
export function paramsAppendToResponsePeople(options: PersonAppendToResponseOptions): HttpParams {
        const append_to_response = new Array<string>();
        options.videos ? append_to_response.push('videos') : null;
        options.images ? append_to_response.push('images') : null;
        options.movie_credits ? append_to_response.push('movie_credits') : null;
        options.tv_credits ? append_to_response.push('tv_credits') : null;
        return new HttpParams().set('append_to_response', append_to_response.join(','));
}