import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  clearUser() {
    localStorage.clear();
  }


  counterBehaviourSubject= new BehaviorSubject<number>(0);
  counter=0;
  setCounter(counter: number) {
    this.counter =counter;
    this.counterBehaviourSubject.next( this.counter);
  }

  user: any;
  setUser(user: any) {

    const userString= JSON.stringify(user);
    localStorage.setItem("User", userString);
    this.user=user;
  }

  baseUrl: string='http://localhost:3000'
  constructor(private http: HttpClient) { 

      const userString=   localStorage.getItem("User");

      if(userString){
       const user= JSON.parse(userString);
       if(user.name){
        this.user=user;
       }
      }


  }


  loginUser(userName: string, password: string) : Observable<any>{

    return this.http.post('http://localhost:3000/api/login', {
      userName: userName,
      password: password
    });
  }
}
