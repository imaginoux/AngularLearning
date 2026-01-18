import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { UserLoginService } from '../Services/user-login.service';

@Directive({
  selector: '[cbHide]'
})
export class HideDirective implements OnInit {


  @Input('role') roles=''
  constructor(private ele : ElementRef<any>, private userService: UserLoginService) { 

  }

  @HostBinding('class.hide')
  isActive = false;

  ngOnInit(): void {
     const arrRole=this.roles.split(",");

     const user=this.userService.user;

     debugger;
     if(arrRole.findIndex((x)=>x.toUpperCase()==user.role.toUpperCase()) > -1){
      this.isActive=false;
     }else {
      this.isActive=true;
     }
  }

}
