import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { UserLoginService } from '../Services/user-login.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  counter?: number;

  constructor(public userService: UserLoginService, private router: Router){

  }


  logout(){
    this.userService.clearUser();
    this.router.navigateByUrl("/login");
  }
  userName='';
  ngOnInit(): void {
    debugger;
      this.userName=this.userService.user?.name;

      this.userService.counterBehaviourSubject.subscribe((result)=>{
        if(result%5==0){
          this.counter=result;
        }
      })
  }

  

}
