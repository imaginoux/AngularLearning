import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }




 showTimePromise(){
    return new Promise((succ: any)=>{
         setInterval(()=>{
      succ(new Date());
    },1000);
    })
  }



  showTime(succ: any){
    setInterval(()=>{
      succ(new Date());
    },1000);
  }




 devPromise(a: any, b: any){
  return new Promise((succ: any,fail: any)=>{
       if(b==0){
      fail("B can't be zero");
      return;
    }

    if(isNaN(a)){
      fail("A should be number");
      return;
    }

    if(isNaN(b)){
      fail("b should be number");
      return;
    }

    succ(a/b);
  })





   
  }



  dev(a: any, b: any, succ: any, fail: any){

    if(b==0){
      fail("B can't be zero");
      return;
    }

    if(isNaN(a)){
      fail("A should be number");
      return;
    }

    if(isNaN(b)){
      fail("b should be number");
      return;
    }

    succ(a/b);
  }
}
