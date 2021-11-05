// manage our shopping lists, access it from recipe area
import { EventEmitter } from '@angular/core';
//1. Setup subject:
import { Subject } from "rxjs";

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  // ingredientChanged = new EventEmitter<Ingredient[]>();   2. Replace EventEmitter with Subject
  ingredientChanged = new Subject<Ingredient[]>();


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
    this.ingredients.push(ingredient); //after this, we are adding new ingredinet to main ingrediet arr
    // but in getIngredient method we are passing a copy of ingredient into service
    // SO we need to create ingredientChanged prop with new evenT:
    // this.ingredientChanged.emit(this.ingredients.slice()); //then add it in shopping list component
    this.ingredientChanged.next(this.ingredients.slice()); // 3. replace emit with next
  }

  // let's create this: for recipe service
  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }         OR:
    // speared operator: turns an arr of element into a list of elements
    this.ingredients.push(...ingredients);

    // this.ingredientChanged.emit(this.ingredients.slice());
    this.ingredientChanged.next(this.ingredients.slice());// 3. replace emit with next
  }

}
