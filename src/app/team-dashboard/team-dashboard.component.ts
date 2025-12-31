import { Component } from '@angular/core';
import { BreadcrumComponent } from '../breadcrum/breadcrum.component';
import { PageHeadingComponent } from "../page-heading/page-heading.component";
import { TaskSectionComponent } from '../task-section/task-section.component';
import { EmployeeDetailsComponent } from "../employee-details/employee-details.component";
import { ProjectStatusComponent } from "../project-status/project-status.component";
import { TodaysTaskComponent } from "../todays-task/todays-task.component";
import { UpcomingTaskComponent } from "../upcoming-task/upcoming-task.component";
import { TATBreachedComponent } from "../tat-breached/tat-breached.component";
import { MyBucketComponent } from "../my-bucket/my-bucket.component";

@Component({
  selector: 'app-team-dashboard',
  standalone: true,
  imports: [BreadcrumComponent, PageHeadingComponent, TaskSectionComponent, EmployeeDetailsComponent, ProjectStatusComponent, TodaysTaskComponent, UpcomingTaskComponent, TATBreachedComponent, MyBucketComponent],
  templateUrl: './team-dashboard.component.html',
  styleUrl: './team-dashboard.component.css'
})
export class TeamDashboardComponent {

  showHome = true;
  homeText = 'Home';
  dashboardText = 'Team Dashboard';


  //httpCLient , Service 

  data=[
    {
    name: "Task",
    count: 4,
    list: [
      {
        id: 1,
        task: "Send Appointment Lette",
        assignedUser: "Amit",
        taskDetail: "As a process we need to send an appointment letter to newly joined resource.",
        assignedBy: "Amit Kawade",
        endDateTime: "31st Dec 2025",
        priority: "High"
      },
      {
         id: 2,
        task: "Verification of Newly Joined Resource",
        assignedUser: "Abhay",
        taskDetail: "Dashboard design for landing page for respective project.",
        assignedBy: "Amit Kawade",
        endDateTime: "31st Dec 2025",
        priority: "High"
      },

    ]
  },

 {
    name: "Open",
    count: 2,
    list: [
      {
         id: 3,
        task: "Send Appointment Lette",
        assignedUser: "Amit",
        taskDetail: "As a process we need to send an appointment letter to newly joined resource.",
        assignedBy: "Amit Kawade",
        endDateTime: "31st Dec 2025",
        priority: "High"
      },
      {
        id: 4,
        task: "Perform Background Verification of Newly Joined Resource",
        assignedUser: "Amit",
        taskDetail: "Dashboard design for landing page for respective project.",
        assignedBy: "Amit Kawade",
        endDateTime: "31st Dec 2025",
        priority: "High"
      },

    ]
  }

  ,{
    name: "Completed",
    count: 3,
    list: [
      {
         id: 5,
        task: "Follow up with seniors for incremented salary details",
        assignedUser: "Amit",
        taskDetail: "Dashboard design for landing page for respective project.",
        assignedBy: "Amit Kawade",
        endDateTime: "31st Dec 2025",
        Status: "Completed"
      },
      {
        id: 6,
        task: "Newly Open Bank Account of Newly Joined Resource",
        assignedUser: "Amit",
        taskDetail: "Completed Document Process ",
        assignedBy: "Amit Kawade",
        endDateTime: "31st Dec 2025",
        Status: "Completed"
      },

    ]
  }]

}
