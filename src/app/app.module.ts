import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, LOCALE_ID, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from "@angular/common";
import locatePt from "@angular/common/locales/pt";

registerLocaleData(locatePt, "pt");

import { routes } from "./app.routes";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantComponent } from "./restaurants/restaurant/restaurant.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { ShoppingCartComponent } from "./restaurant-detail/shopping-cart/shopping-cart.component";
import { MenuItemComponent } from "./restaurant-detail/menu-item/menu-item.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { NotFoundComponent } from "./not-found/not-found.component.spec";
import { OrderSumaryComponent } from "./order-summary/order-summary.component";
import { SharedModule } from "./shared/shared.module";
import { ApplicationErrorHander } from "./app.error-handle";
import { LoginComponent } from "./security/login/login.component";
import { UserDetailComponent } from "./header/user-detail/user-detail.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDetailComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    NotFoundComponent,
    OrderSumaryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: "pt" },
    { provide: ErrorHandler, useClass: ApplicationErrorHander }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
