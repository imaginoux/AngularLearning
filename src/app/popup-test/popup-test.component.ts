import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CBPopupComponent } from '../Library/popup/popup.component';

@Component({
  selector: 'cb-popup-test',
  imports: [CommonModule,FormsModule,CBPopupComponent],
  templateUrl: './popup-test.component.html',
  styleUrl: './popup-test.component.css'
})
export class PopupTestComponent {
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

