import { NotFoundComponent } from "./not-found/not-found.component.spec";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { OrderComponent } from "./order/order.component";
import { OrderSumaryComponent } from "./order-summary/order-summary.component";
import { LoginComponent } from "./security/login/login.component";
import { LoggedInGuard } from "./security/loggedin.guard";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login/:to", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "restaurants", component: RestaurantsComponent },
  {
    path: "restaurants/:id",
    component: RestaurantDetailComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent },
    ],
  },
  {
    path: "order",
    loadChildren: "./order/order.module#OrderModule",
    canLoad: [LoggedInGuard], canActivate: [LoggedInGuard],
  },
  { path: "order-summary", component: OrderSumaryComponent },
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
  { path: "**", component: NotFoundComponent },
];
