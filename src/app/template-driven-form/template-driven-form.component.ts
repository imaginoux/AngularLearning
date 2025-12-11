import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
   name: string = '';
  email: string = '';
  age: number | null = null;
  gender: string = '';
  message: string = '';
  agree: boolean = false;
  // model to hold submitted form data (simplest form model)
  submittedData: any = null;

  // called when the form is submitted
  onSubmit(form: NgForm) {
    debugger;
    // mark all controls as touched so validation messages appear if invalid
    form.form.markAllAsTouched();

    if (form.valid) {
      // shallow copy the value to show what was submitted
      this.submittedData = { ...form.value };
      // reset the form (optional)
      form.resetForm();
      this.name = '';
      this.email = '';
      this.age = null;
      this.gender = '';
      this.message = '';
      this.agree = false;
    } else {
      // keep submittedData null if invalid; you might show an error banner
      this.submittedData = null;
    }
  }
}
