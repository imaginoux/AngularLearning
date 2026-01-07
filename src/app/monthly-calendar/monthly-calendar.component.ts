import { Component } from '@angular/core';
import { BreadcrumComponent } from '../breadcrum/breadcrum.component';
import { PageHeadingComponent } from '../page-heading/page-heading.component';


@Component({
  selector: 'cb-monthly-calendar',
  imports: [ BreadcrumComponent, PageHeadingComponent],
  templateUrl: './monthly-calendar.component.html',
  styleUrl: './monthly-calendar.component.css'
})
export class MonthlyCalendarComponent {
showHome = true;
  homeText = 'Home';
  monthlyText = 'Monthly Calendar';

}
