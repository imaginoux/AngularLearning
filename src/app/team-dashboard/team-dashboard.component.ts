import { Component } from '@angular/core';
import { BreadcrumComponent } from '../breadcrum/breadcrum.component';
import { PageHeadingComponent } from "../page-heading/page-heading.component";
import { TaskSectionComponent } from '../task-section/task-section.component';

@Component({
  selector: 'app-team-dashboard',
  standalone: true,
  imports: [BreadcrumComponent, PageHeadingComponent, TaskSectionComponent],
  templateUrl: './team-dashboard.component.html',
  styleUrl: './team-dashboard.component.css'
})
export class TeamDashboardComponent {

  showHome = true;
  homeText = 'Home';
  dashboardText = 'Team Dashboard';


  data={
    name: "Task",
    count: 7,
    list: [
      {
        task: "Send Appointment Lette",
        assignedUser: "Amit",
        taskDetail: "As a process we need to send an appointment letter to newly joined resource.",
        assignedBy: "Amit Kawade",
        priority: "High"
      },
      {
        task: "Send Appointment Lette",
        assignedUser: "Amit",
        taskDetail: "As a process we need to send an appointment letter to newly joined resource.",
        assignedBy: "Amit Kawade",
        priority: "High"
      },
      {
        task: "Send Appointment Lette",
        assignedUser: "Amit",
        taskDetail: "As a process we need to send an appointment letter to newly joined resource.",
        assignedBy: "Amit Kawade",
        priority: "High"
      }

    ]
  }

}
