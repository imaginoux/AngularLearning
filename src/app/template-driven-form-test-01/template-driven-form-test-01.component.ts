import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-test-01',
  imports: [ FormsModule, CommonModule],
  templateUrl: './template-driven-form-test-01.component.html',
  styleUrl: './template-driven-form-test-01.component.css'
})
export class TemplateDrivenFormTest01Component {


  firstNameLength= computed(()=>this.userObj()?.first_name?.length);
  constructor(){
     effect(() => {
      console.log('Value changed:', this.userObj());
    });
  }

  userObj=signal({first_name:"",});

userdata = {
  first_name:"",
  emailID:"",
  address:""
}


change(){
  this.userObj.set({...this.userdata})

}

onSubmit(form:any){
  debugger;
  console.log ('submited data is '+ form.value);
    alert ('submitted form:' +JSON.stringify(form.value));

  }
}


