import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showUserType'
})
export class ShowUserTypePipe implements PipeTransform {

  transform(value: string, currentUser: string): unknown {

    if(value.toLowerCase()==currentUser.toLowerCase()){
      return 'Individual';
    }else {
      return value;
    }
  }

}
