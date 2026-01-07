import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-page-heading',
  imports: [CommonModule],
  templateUrl: './page-heading.component.html',
  styleUrl: './page-heading.component.css'
})
export class PageHeadingComponent {
  @Input() dashboardLabel: string = 'Team Dashboard';
  @Input() monthlycalendarLabel: string = 'Monthly Calendar';
   @Input() showPageTitle: boolean = true;

}
