import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService] we'll do it in app.module, because we need in for shopping as well
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [
    // new Ingredient("Apples", 5),
    // new Ingredient("Tomatoes", 2),
    // new Ingredient("Bread", 2),
  ];

  // for cleaning up subscription with subject:
  // 1. create a property
  private igChengeSub: Subscription;

  constructor(private shoppingListServiceProp: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListServiceProp.getIngredients();

    // so after this ^ we need to access service and subscribe to that  ingredientChanged enevt:
    // 2. add it here
    this.igChengeSub = this.shoppingListServiceProp.ingredientChanged
    .subscribe(
      // whenever ingredinets changs =>
      (ingredientsss: Ingredient[]) => {
        this.ingredients = ingredientsss
      }
    )
  }

  onEditItem(index: number) {
    this.shoppingListServiceProp.startedEditing.next(index);
  }

  // 3. Add OnDestroy and here:
  ngOnDestroy() {
    this.igChengeSub.unsubscribe();
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }         Manage from service
}
