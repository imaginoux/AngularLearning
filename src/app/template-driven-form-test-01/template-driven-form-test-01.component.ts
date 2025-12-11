import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-test-01',
  imports: [ FormsModule, CommonModule],
  templateUrl: './template-driven-form-test-01.component.html',
  styleUrl: './template-driven-form-test-01.component.css'
})
export class TemplateDrivenFormTest01Component {
userdata = {
  first_name:"",
  emailID:"",
  address:""
}
onSubmit(form:any){
  debugger;
  console.log ('submited data is '+ form.value);
    alert ('submitted form:' +JSON.stringify(form.value));

  }
}


