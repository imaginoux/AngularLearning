import { Component,AfterViewInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ContentareaComponent } from './contentarea/contentarea.component';
import { FooterComponent } from "./footer/footer.component";
import { LeftnavComponent } from "./leftnav/leftnav.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupFormComponent } from './popup/popup.component';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo' ;
}

