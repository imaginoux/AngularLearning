import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  // The FormGroup that holds all form controls
  form!: FormGroup;

  // To show what was submitted
  submittedData: any = null;

  // inject FormBuilder to create the form
  constructor(private fb: FormBuilder) {
   
  }
  ngOnInit(): void {
    // create the form with controls and validators
    let messageValidator:  any[]=[];
    let role="admin"
    if(role!="admin"){
      messageValidator=[Validators.required, Validators.minLength(10)]
    }
  
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.min(0)]],
      gender: [''],
      message: ['', messageValidator],
      agree: [false, [Validators.requiredTrue]], // requiredTrue for checkbox
      rDate: []
    });

    this.form.markAsDirty();

    for(let con in this.form.controls){
      this.form.controls[con].markAsDirty();
    }
  }

  // helper getters to access controls in template cleanly
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get age() { return this.form.get('age'); }
  get gender() { return this.form.get('gender'); }
  get message() { return this.form.get('message'); }
  get agree() { return this.form.get('agree'); }
  get rDate() { return this.form.get('rDate'); }

  // called when user submits the form
  onSubmit(): void {
    // mark all as touched so validation messages appear
    this.form.markAllAsTouched();

    if (this.form.valid) {
      // copy values so we don't accidentally keep references
      this.submittedData = { ...this.form.value };
      // optionally reset the form to initial state
      this.form.reset({
        name: '',
        email: '',
        age: null,
        gender: '',
        message: '',
        agree: false
      });
    } else {
      // invalid - keep submittedData null (or set message)
      this.submittedData = null;
    }
  }
}
