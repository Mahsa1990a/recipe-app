// managing recipes and datas

import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

  // the type is Recipe Model
  private recipes: Recipe[] = [
    //create a new obj based on our Recipe class:
    new Recipe(
      "Tasty steak",
      "Super tasty steak .... This is awesome!",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        new Ingredient("Meat", 3),
        new Ingredient("French fries", 20)
      ]
      ),
    new Recipe(
      "Big Fat Burger",
      "What else you need to say?",
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg",
      [
        new Ingredient("Meat", 5),
        new Ingredient("French fries", 20),
        new Ingredient("Pepsi", 3) // then in recipe details we can output them
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice(); //this will return new arr which is copy of this arr in this service
    // So with this ^ we get a copy of recipes arr for using outside
  }

  recipeSelectedMethod(recipe) {
    this.recipeSelected.emit(recipe);
  }
}
