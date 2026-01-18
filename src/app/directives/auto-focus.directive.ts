import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[cbAutoFocus]'
})
export class AutoFocusDirective implements OnInit {

  constructor(private ele : ElementRef<any>) { 

    

    
  }
  ngOnInit(): void {
    debugger;
    this.ele.nativeElement.focus()
  }

}
