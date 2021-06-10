import {EventsActions} from '../actions';

export function events(state = [], {type, payload}) {
  switch (type) {
    case EventsActions.GET_EVENTS_SUCCESS:
      return payload;
    case EventsActions.DELETE_EVENTS:
      return [];
    case EventsActions.DELETE_EVENT:
      return state.filter((event) => event !== payload);
    case EventsActions.UPDATE_EVENT:
      return state;
    case EventsActions.ADD_EVENT:
      state.push({
        ...payload
      });
      return state;
    default:
      return state;
  }
}
