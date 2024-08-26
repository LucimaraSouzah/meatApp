import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";


export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
  canDeactivate(orderComponent: OrderComponent, 
                currentRoute: ActivatedRouteSnapshot, 
                currentState: RouterStateSnapshot): boolean {
    if (!orderComponent.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?');
    } else {
      return true;
    }
  }
}