import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ShowUserTypePipe } from '../pipes/show-user-type.pipe';

@Component({
  selector: 'cb-task-section',
  imports: [CommonModule, ShowUserTypePipe],
  templateUrl: './task-section.component.html',
  styleUrl: './task-section.component.css'
})
export class TaskSectionComponent {


  currentUser='Amit';
  @Input('task') task: any;

}
