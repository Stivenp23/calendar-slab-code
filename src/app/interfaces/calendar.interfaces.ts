export interface CalendarEventSlab{
  id?: string | number;
  start: Date;
  end?: Date;
  title: string;
  color?: string;
  actions: any;
  allDay?: boolean;
  cssClass?: string;
  resizable?: {
    beforeStart?: boolean;
    afterEnd?: boolean;
  };
  draggable?: boolean;
  city: string;
}
