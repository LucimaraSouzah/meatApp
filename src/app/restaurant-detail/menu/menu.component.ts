import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { MenuItem } from "../menu-item/menu-item.model";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(
      this.route.parent.snapshot.params["id"]
    );
  }
}
