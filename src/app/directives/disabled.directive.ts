import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { UserLoginService } from '../Services/user-login.service';

@Directive({
  selector: '[cbDisabled]'
})
export class DisabledDirective {

   @Input('role') roles=''
  constructor(private ele : ElementRef<any>, private userService: UserLoginService) { 

  }

  @HostBinding('attr.disabled')
  isActive : any= '';

  ngOnInit(): void {
     const arrRole=this.roles.split(",");

     const user=this.userService.user;

     debugger;
     if(arrRole.findIndex((x)=>x.toUpperCase()==user.role.toUpperCase()) > -1){
      this.isActive=null;
     }else {
      this.isActive=true;
     }
  }

}
