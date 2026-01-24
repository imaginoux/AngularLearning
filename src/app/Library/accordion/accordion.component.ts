import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { AccordionDirective } from '../accordion.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cb-accordion',
  imports: [CommonModule,AccordionDirective ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent implements  AfterContentInit {

  @Input('isAllowMultiOpen') isAllowMultiOpen! : boolean;
  ngAfterContentInit(): void {
   
    if(!this.isAllowMultiOpen){
       this.accordionDirective?.forEach((a)=>{

     if(a.isAlwaysOpen){
        a.isOpen=true;
        this.currentOpen=a;
      } else if(a.isOpen){
        if(this.currentOpen==null){
            this.currentOpen=a;
        }else {
          a.isOpen=false;
        }        
      }      
    })
    }
   



  }

 public currentOpen: AccordionDirective | null=null;

  showHide(a: AccordionDirective){

     if(!this.isAllowMultiOpen){
    this.accordionDirective?.forEach((a1)=>{
      
      if(a1.isAlwaysOpen){
        a1.isOpen=true;
      } else if(a==a1){
        a1.isOpen=true;
      }else {
          a1.isOpen=false;
      }
      
    })
  }else {
    if(a.isAlwaysOpen){

    }else {
       a.isOpen=!a.isOpen;

    }
   
  }
   
  }

  @ContentChildren(AccordionDirective) accordionDirective? : QueryList<AccordionDirective> ;
}
