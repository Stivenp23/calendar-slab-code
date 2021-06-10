import {Injectable} from '@angular/core';
import {startOfDay} from 'date-fns';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private store: Store<any>) {
  }

  events$: Observable<any> = this.store.select('events');
  cities$: Observable<any> = this.store.select('cities');

  getEvents() {
    return of(
      [
        {
          start: startOfDay(new Date()),
          end: startOfDay(new Date()),
          title: 'Prueba 1',
          color: {
            primary: '#ad2121',
            secondary: '#FAE3E3',
          },
          city: 'Medellín',
          actions: '',
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
        },
        {
          start: startOfDay(new Date()),
          end: startOfDay(new Date()),
          title: 'Prueba 2',
          color: {
            primary: '#007bff',
            secondary: '#007bff',
          },
          city: 'Bogotá',
          actions: '',
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
        }
      ]
    );
  }

  getCities() {
    return of(
      [
        {
          label: 'Bogotá'
        },
        {
          label: 'Medellín'
        },
        {
          label: 'Barranquilla'
        }
      ]
    );
  }
}
