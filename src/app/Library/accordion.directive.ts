import { Directive, Input, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cbAccordion]'
})
export class AccordionDirective {


  @Input('header') public header? : string;


  @Input('isOpen') public isOpen? : boolean;


  @Input('isAlwaysOpen') public isAlwaysOpen? : boolean=false;

  constructor(public temp: TemplateRef<any>) { }

}
