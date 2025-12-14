  import { Component } from '@angular/core';
  import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LeftnavComponent } from '../leftnav/leftnav.component';


  @Component({
    selector: 'app-contentarea',
    imports: [RouterModule, HeaderComponent, FooterComponent, LeftnavComponent],
    templateUrl: './contentarea.component.html',
    styleUrl: './contentarea.component.css'
  })
  export class ContentareaComponent {  

  }
