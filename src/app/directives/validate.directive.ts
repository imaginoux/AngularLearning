import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[cbValidate]'
})
export class ValidateDirective {

  constructor(ele: ElementRef<any>) { 

    this.ValidateInput(ele.nativeElement)

  }



@HostBinding('class.err')
  isActive = false;



  @HostListener('input',['$event.target'])
  ValidateInput(ele: any){
    debugger;
    const userInput=ele.value;
    if(userInput==""){
      this.isActive=false;
      return ;
    }
   // const result= /^-?\d+$/.test(userInput);

    if(!ele.validity.patternMismatch){
      //eve.target.classList.remove('err');
      this.isActive=false;
    }else {
     // eve.target.classList.add('err');
     this.isActive=true;
    }
//

  }



}
