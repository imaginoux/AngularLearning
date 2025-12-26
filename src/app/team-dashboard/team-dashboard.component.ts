import { Component } from '@angular/core';
import { BreadcrumComponent } from '../breadcrum/breadcrum.component';
import { PageHeadingComponent } from "../page-heading/page-heading.component";

@Component({
  selector: 'app-team-dashboard',
  standalone: true,
  imports: [BreadcrumComponent, PageHeadingComponent],
  templateUrl: './team-dashboard.component.html',
  styleUrl: './team-dashboard.component.css'
})
export class TeamDashboardComponent {

  showHome = true;
  homeText = 'Home';
  dashboardText = 'Team Dashboard';

}
