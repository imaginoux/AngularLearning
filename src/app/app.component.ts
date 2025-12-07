import { Component,AfterViewInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ContentareaComponent } from './contentarea/contentarea.component';
import { FooterComponent } from "./footer/footer.component";
import { LeftnavComponent } from "./leftnav/leftnav.component";
import { RightnavComponent } from './rightnav/rightnav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    HeaderComponent, ContentareaComponent, FooterComponent, LeftnavComponent, RightnavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
