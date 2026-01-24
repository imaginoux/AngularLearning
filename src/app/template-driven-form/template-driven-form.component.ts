import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { User } from '../Models/User';
import { TitleCaseSmartPipe } from '../title-case-smart.pipe';
import { CBPopupComponent } from '../Library/popup/popup.component';
import { CalculatorService } from '../Services/calculator.service';
import { filter, map, skip, take } from 'rxjs';
import { UserLoginService } from '../Services/user-login.service';
import { CanComponentDeactivate } from '../guards/deativate.guard';
import { ValidateDirective } from '../directives/validate.directive';
import { AutoFocusDirective } from '../directives/auto-focus.directive';
import { HideDirective } from '../directives/hide.directive';
import { DisabledDirective } from '../directives/disabled.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  standalone:true,
//<<<<<<< Updated upstream//
  imports: [CommonModule, FormsModule, TitleCaseSmartPipe,CBPopupComponent, ValidateDirective, AutoFocusDirective, HideDirective, DisabledDirective],
//=======//

//>>>>>>> Stashed changes//
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
//implements 
export class TemplateDrivenFormComponent implements OnInit , CanComponentDeactivate  {


time="";
  resultNumber: any;
  constructor(private cs: CalculatorService, private userService : UserLoginService){

    // this.cs.showTime((x: any)=>{
    //   this.time=x;
    // })

    //observable 


      this.cs.showTimeObs().subscribe({

        next: (x: any)=>{
      this.time=x;
    } 
      }
)



 

    this.cs.showTimePromise().then(
(x: any)=>{
      this.time=x;
    } )
  }
  canDeactivate= () => {

    if(this.counter%5 ==0){
      return true;
    }


    return false;
  };
  message: any="";
  result: any=0;


  counter=0;

  Reset(){
    this.counter=0;
    this.userService.setCounter(this.counter);
  }
  Inc(){
    this.counter=this.counter +1;

    this.userService.setCounter(this.counter);
  }


  showNumber(a: number){
    debugger;
    this.cs.showEvenUpTo(100).pipe(filter(x=>x%2==0), map(x=>"a" + x),skip(5), take(5)).subscribe({
      next: (res)=>{
    //    if(res%2==0){
            this.resultNumber=res;
      //  }
          
      }
    })
  }
 async calc(a: any,b: any){

    this.cs.devObs(a,b).subscribe(
{

  next: (x)=>{
           this.result=x;
      this.message="";
  },

  error: (err)=>{
          this.message=err;
      this.result=0;
  }


})


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
