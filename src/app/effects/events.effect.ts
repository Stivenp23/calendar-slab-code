import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

@Injectable()
export class EventsEffect {
  constructor(
    private actions$: Actions
  ) {
  }


}