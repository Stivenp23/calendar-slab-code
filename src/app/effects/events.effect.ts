import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EventsActions} from '../actions';
import {catchError, switchMap, take} from 'rxjs/operators';
import {EventsService} from '../services/eventsService';
import {of} from 'rxjs';

@Injectable()
export class EventsEffect {
  constructor(
    private actions$: Actions,
    private eventsService: EventsService
  ) {
  }

  @Effect()
  getEvents$ = this.actions$.pipe(
    ofType(EventsActions.SET_EVENTS),
    take(1),
    switchMap<any, any>(data =>
      this.eventsService.getEvents().pipe(
        switchMap(res => of(EventsActions.getEventsSuccess(res))),
        catchError(err => {
          return of();
        })
      )
    )
  );

  @Effect()
  getCities$ = this.actions$.pipe(
    ofType(EventsActions.SET_CITIES),
    take(1),
    switchMap<any, any>(data =>
      this.eventsService.getCities().pipe(
        switchMap(res => of(EventsActions.getCitiesSuccess(res))),
        catchError(err => {
          return of();
        })
      )
    )
  );

}
