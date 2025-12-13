import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { User } from '../Models/User';
import { TitleCaseSmartPipe } from '../title-case-smart.pipe';

@Component({
  selector: 'app-template-driven-form',
  standalone:true,
  imports: [CommonModule, FormsModule, TitleCaseSmartPipe],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit  {
  ngOnInit(): void {
    this.user= new User();
    this.user.email="@qdn.com";
  }
  user!: User; //instanse variable 
  // model to hold submitted form data (simplest form model)
  submittedData: any = null;



  // called when the form is submitted
  onSubmit(form: NgForm,input: NgModel) {
    debugger;
    // mark all controls as touched so validation messages appear if invalid
    form.form.markAllAsTouched();

    if (form.valid) {
      // shallow copy the value to show what was submitted
      this.submittedData = { ...form.value };
      // reset the form (optional)
      form.resetForm();
      this.user= new User();
    } else {
      // keep submittedData null if invalid; you might show an error banner
      this.submittedData = null;
    }
  }
}
