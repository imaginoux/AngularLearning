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
        endDateTime: "31st Dec 2025",
        priority: "High"
      },
      {
        task: "Verification of Newly Joined Resource",
        assignedUser: "Amit",
        taskDetail: "Dashboard design for landing page for respective project.",
        assignedBy: "Amit Kawade",
        endDateTime: "31st Dec 2025",
        priority: "High"
      },

    ]
  }

  data={
    name: "Open",
    count: 7,
    list: [
      {
        task: "Send Appointment Lette",
        assignedUser: "Amit",
        taskDetail: "As a process we need to send an appointment letter to newly joined resource.",
        assignedBy: "Amit Kawade",
        endDateTime: "31st Dec 2025",
        priority: "High"
      },
      {
        task: "Perform Background Verification of Newly Joined Resource",
        assignedUser: "Amit",
        taskDetail: "Dashboard design for landing page for respective project.",
        assignedBy: "Amit Kawade",
        endDateTime: "31st Dec 2025",
        priority: "High"
      },

    ]
  }

  data={
    name: "Completed",
    count: 7,
    list: [
      {
        task: "Follow up with seniors for incremented salary details",
        assignedUser: "Amit",
        taskDetail: "Dashboard design for landing page for respective project.",
        assignedBy: "Amit Kawade",
        endDateTime: "31st Dec 2025",
        Status: "Completed"
      },
      {
        task: "Newly Open Bank Account of Newly Joined Resource",
        assignedUser: "Amit",
        taskDetail: "Completed Document Process ",
        assignedBy: "Amit Kawade",
        endDateTime: "31st Dec 2025",
        Status: "Completed"
      },

    ]
  }

}
