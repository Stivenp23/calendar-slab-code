import {EventsActions} from '../actions';

export function cities(state = [], {type, payload}) {
  switch (type) {
    case EventsActions.GET_CITIES_SUCCESS:
      return payload;
    default:
      return state;
  }
}
