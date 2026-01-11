import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }



 showTimeObs(){
    return new Observable((ob: Observer<any>)=>{
         setInterval(()=>{
      ob.next(new Date());
    },1000);
    })
  }


  
 showEvenUpTo(num: number){
    return new Observable((ob: Observer<any>)=>{

      for(let i=0;i<num;i++){
              setTimeout(()=>{                
          ob.next(i);
           },1000*i);
      }
        
    })
  }




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






 devObs(a: any, b: any){

    return new Observable((ob: Observer<any>)=>{


          if(b==0){
      ob.error("B can't be zero");
      return;
    }

    if(isNaN(a)){
       ob.error("A should be number");
      return;
    }

    if(isNaN(b)){
       ob.error("b should be number");
      return;
    }

    ob.next(a/b);
    ob.complete();

      

    });

  // return new Promise((succ: any,fail: any)=>{
  //      if(b==0){
  //     fail("B can't be zero");
  //     return;
  //   }

  //   if(isNaN(a)){
  //     fail("A should be number");
  //     return;
  //   }

  //   if(isNaN(b)){
  //     fail("b should be number");
  //     return;
  //   }

  //   succ(a/b);
  // })

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
