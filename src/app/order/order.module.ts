import { NgModule } from "@angular/core";
import { OrderComponent } from "./order.component";
import { SharedModule } from "app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { LeaveOrderGuard } from "./leave-order.guard";

const routes: Routes = [{ path: "", component: OrderComponent, canDeactivate: [LeaveOrderGuard] }];

@NgModule({
  declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class OrderModule {}
