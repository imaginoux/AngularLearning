import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { User } from '../Models/User';
import { TitleCaseSmartPipe } from '../title-case-smart.pipe';
import { CBPopupComponent } from '../Library/popup/popup.component';
import { CalculatorService } from '../Services/calculator.service';
import { MonthlyCalendarComponent } from '../monthly-calendar/monthly-calendar.component';

@Component({
  selector: 'app-template-driven-form',
  standalone:true,
  imports: [CommonModule, FormsModule, TitleCaseSmartPipe,CBPopupComponent],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit  {


time="";
  constructor(private cs: CalculatorService){

    this.cs.showTime((x: any)=>{
      this.time=x;
    })


//     this.cs.showTimePromise().then(
// (x: any)=>{
//       this.time=x;
//     } )
  }
  message: any="";
  result: any=0;
 async calc(a: any,b: any){
    //  this.cs.dev(a,b, (x: any)=>{
    //   this.result=x;
    //   this.message="";
    //  },
    // (err: any)=>{
    //   this.message=err;
    //   this.result=0;
    // });
    



    // this.cs.devPromise(a,b).then(
    //   (x: any)=>{
    //   this.result=x;
    //   this.message="";
    //  },
    // (err: any)=>{
    //   this.message=err;
    //   this.result=0;
    // }

    // )

    // this.cs.devPromise(a,b).then(

    //   (x: any)=>{
    //   this.result=x;
    //   this.message="";
    //  }
    // ).catch(
    //    (err: any)=>{
    //   this.message=err;
    //   this.result=0;
    // }
    // )



try{
  this.result =await this.cs.devPromise(a,b);
}catch(ex){
  this.message=ex;
}


//2 API call
//Promise.all
//Promise.race
//Promise.allSettled
//Promise.any
    
    
    
  }
  Show(){
    this.isShowPopup=true;
  }
  Close(){
    alert("Close click");
    this.isShowPopup=false;
  }
  isShowPopup=true;
  OkClick($event: any){
    alert($event);
    this.isShowPopup=false;
  }
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
