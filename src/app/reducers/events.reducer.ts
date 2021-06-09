import {EventsActions} from '../actions';

export function events(state = [], {type, payload}) {
  switch (type) {
    case EventsActions.GET_EVENTS:
      return payload;
    default:
      return state;
  }
}
