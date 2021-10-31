// managing recipes and datas

import { Recipe } from "./recipe.model";

export class RecipeService {
  // the type is Recipe Model
  private recipes: Recipe[] = [
    //create a new obj based on our Recipe class:
    new Recipe("A Test Recipe", "This is TEST", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("Anotherrrrrr Test Recipe", "This is TEST", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")
  ];

  getRecipes() {
    return this.recipes.slice(); //this will return new arr which is copy of this arr in this service
    // So with this ^ we get a copy of recipes arr for using outside
  }
}
