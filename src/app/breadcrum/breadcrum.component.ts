import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'cb-breadcrum',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrum.component.html',
  styleUrl: './breadcrum.component.css'
})
export class BreadcrumComponent {



   @Input() homeLabel: string = 'Home';
  @Input() dashboardLabel: string = 'Team Dashboard';
  @Input() showHome: boolean = true;

}
