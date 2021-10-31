// manage our shopping lists, access it from recipe area
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  // add ingredinets:
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 2),
    new Ingredient("Bread", 2),
  ];

  // getIngredients method to get a copy of recipes arr:
  getIngredients() {
    return this.ingredients.slice(); //return a copy of ingredients arr
  }

  // addIngredient method
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
