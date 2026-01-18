import { CanDeactivateFn } from '@angular/router';



export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}
export const deativateGuard: CanDeactivateFn<CanComponentDeactivate> = (component, currentRoute, currentState, nextState) => {
 
 
  if(component.canDeactivate()){
    return true;
  }
  if(confirm('Please make counter is mode of 5, Would you like to continue')){
    return true;
  }
  return false;
};
