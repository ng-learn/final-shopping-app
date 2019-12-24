import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "this is simply a test",
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1460,h_1825/k%2FPhoto%2FRecipes%2F2019-08-how-to-juiciest-turkey-meatballs%2FHow-to-Make-the-Best-Juiciest-Turkey-Meatballs_055"
    ),
    new Recipe(
      "A test recipe",
      "this is simply a test",
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1460,h_1825/k%2FPhoto%2FRecipes%2F2019-08-how-to-juiciest-turkey-meatballs%2FHow-to-Make-the-Best-Juiciest-Turkey-Meatballs_055"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
