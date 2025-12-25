import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cb-popup ',
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class CBPopupComponent {



  @Input('header') header!: any;
  @Input('isHeader') isHeader!: any;
  @Input('isFooter') isFooter?: any=false;
  @Input('isOkShow') isOkShow?: any=false;
  @Input('isCancelShow') isCancelShow?: any=false;
  @Output('OkEvent') OkEvent = new EventEmitter<any>();
  @Output('CancelEvent') CacnelEvent = new EventEmitter<any>();

    OkCLick(){
    this.OkEvent.next("I am ok click");
    }

    CancelCLick(){
      this.CacnelEvent.next("I am cancel click");
    }

 
}
