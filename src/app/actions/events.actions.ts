export class EventsActions {
  static GET_EVENTS = '[Config] GET_EVENTS'

  static getEvents = payload => ({
    type: EventsActions.GET_EVENTS,
    payload,
  })
}
