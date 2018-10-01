import { Component } from '@angular/core';

Component({
  selector: 'wsm-calendar',
  template: `
        <calendar
            [mode]="'MONTH'"
            [min]="periodDates.startDate()"
            [max]="periodDates.lastDate()"
            [(ngModel)]="period">
        </calendar>`,
  styleUrls: ['./wsm-calendar.component.scss'],
})
export class WsmCalendarComponent {

}
