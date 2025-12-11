import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-test-templatedriven-from',
  imports: [FormsModule,CommonModule],
  templateUrl: './test-templatedriven-from.component.html',
  styleUrl: './test-templatedriven-from.component.css'
})
export class TestTemplatedrivenFromComponent {

  userdata = {
    name :"",
    email :""
   
  }
onSubmit(form:any){
  console.log('submited data is '+ form.value);
  alert('submited form:'+JSON.stringify(form.value));

}
}
