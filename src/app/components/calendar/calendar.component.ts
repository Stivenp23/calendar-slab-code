import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import {Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import {AppState} from '../../reducers';
import {Store} from '@ngrx/store';
import {EventsActions} from '../../actions';
import {EventsService} from '../../services/eventsService';
import {ModalComponent} from '../modal/modal.component';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  @ViewChild('modalContent', {static: true}) modalContent: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  events: CalendarEvent[] = [];
  activeDayIsOpen = true;
  refresh: Subject<any> = new Subject();

  constructor(private modal: NgbModal,
              private store: Store<AppState>,
              public eventsService: EventsService,
              private modalService: NgbModal) {
    this.store.dispatch(EventsActions.setEvents());
    this.store.dispatch(EventsActions.setCities());
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = {event, action};
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.modalData = this.modalData;
  }

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  addEvent(): void {
    this.store.dispatch(EventsActions.addEvent(
      {
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        title: '',
        color: {
          primary: '#ad2121',
          secondary: '#FAE3E3',
        },
        city: 'Bogotá',
        actions: '',
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ));
    this.refresh.next();
  }

  deleteEvents(): void {
    this.store.dispatch(EventsActions.deleteEvents());
  }

  updateEvent(updateEvent: CalendarEvent) {
    this.store.dispatch(EventsActions.updateEvent(updateEvent));
    this.refresh.next();
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.store.dispatch(EventsActions.deleteEvent(eventToDelete));
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
