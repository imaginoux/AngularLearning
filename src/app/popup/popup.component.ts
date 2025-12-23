import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CBPopupComponent } from '../Library/popup/popup.component';

@Component({
  selector: 'app-popup',
  standalone:true,
  imports:[CommonModule,FormsModule,CBPopupComponent],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupFormComponent {

  showPopup = false;

  isHeader=true;
  formData = {
    name: '',
    email: ''
  };

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  submitForm() {
    console.log(this.formData);
    alert('Form Submitted Successfully!');
    this.closePopup();
  }
}
