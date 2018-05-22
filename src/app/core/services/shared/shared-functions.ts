import { HttpParams } from '@angular/common/http';

 /**
   * Get params to image and videos append to response; see https://developers.themoviedb.org/3/getting-started/append-to-response
   */
export function paramsAppendToResponse(
    videos: Boolean = false, images: Boolean = false
): HttpParams {
    /**
     * Switch is nedeed because http params is an inmutable object,
     * in other words only one set can be executed at the object creation
     *
     * Wildcard: typecript not have switch with non core types, in this order
     * of ideas the next is a emulated form to make this, not the best
     * but seems prety good, if you are looking that, scuse me but i can't
     * no write this, in a production project never i go to make some like this
     */
    switch ([videos, images].join(',')) {
        case 'true,false': {
            return new HttpParams().set('append_to_response', 'videos');
        }
        case 'true,false': {
            return new HttpParams().set('append_to_response', 'images');
        }
        case 'true,false': {
            return new HttpParams().set('append_to_response', 'images,videos');
        }
        default:
        {
            return new HttpParams();
        }
    }
}
