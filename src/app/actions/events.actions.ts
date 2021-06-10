export class EventsActions {
  static SET_EVENTS = '[Config] SET_EVENTS';
  static DELETE_EVENTS = '[Config] DELETE_EVENTS';
  static DELETE_EVENT = '[Config] DELETE_EVENT';
  static ADD_EVENT = '[Config] ADD_EVENT';
  static SET_CITIES = '[Config] SET_CITIES';
  static GET_EVENTS_SUCCESS = '[Config] GET_EVENTS_SUCCESS';
  static GET_CITIES_SUCCESS = '[Config] GET_CITIES_SUCCESS';
  static setEvents = () => ({
    type: EventsActions.SET_EVENTS
  });
  static setCities = () => ({
    type: EventsActions.SET_CITIES
  });
  static getEventsSuccess = payload => ({
    type: EventsActions.GET_EVENTS_SUCCESS,
    payload,
  });
  static getCitiesSuccess = payload => ({
    type: EventsActions.GET_CITIES_SUCCESS,
    payload,
  });
  static deleteEvent = payload => ({
    type: EventsActions.DELETE_EVENT,
    payload
  });
  static deleteEvents = () => ({
    type: EventsActions.DELETE_EVENTS
  });
  static addEvent = payload => ({
    type: EventsActions.ADD_EVENT,
    payload
  });
}
