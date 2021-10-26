import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../../recipes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // the type is Recipe Model
  recipes: Recipe[] = [
    //create a new obj based on our Recipe class:
    new Recipe("A Test Recipe", "This is TEST", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("Anotherrrrrr Test Recipe", "This is TEST", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
