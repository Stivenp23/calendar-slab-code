import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
// Components
import {AppComponent} from './app.component';
import {LayoutComponent} from './pages/layout/layout.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import localePy from '@angular/common/locales/es-PY';
import {ModalComponent} from './components/modal/modal.component';
// Redux
import * as reducers from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ActionReducerMap, State, StoreModule} from '@ngrx/store';
import {registerLocaleData} from '@angular/common';
import {effects} from './effects';
// Env
import {environment} from '../environments/environment';
// Lib
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {FlatpickrModule} from 'angularx-flatpickr';
import {EventsService} from './services/eventsService';

export const reducerToken = new InjectionToken<ActionReducerMap<State<reducers.AppState>>>('Registered Reducers');
registerLocaleData(localePy, 'es');

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    CalendarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducerToken),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModalModule
  ],
  providers: [
    {provide: 'ENV', useValue: environment},
    {provide: reducerToken, useValue: reducers},
    {provide: LOCALE_ID, useValue: 'es'},
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
