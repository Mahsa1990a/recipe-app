import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService] we'll do it in app.module, because we need in for shopping as well
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    // new Ingredient("Apples", 5),
    // new Ingredient("Tomatoes", 2),
    // new Ingredient("Bread", 2),
  ];

  constructor(private shoppingListServiceProp: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListServiceProp.getIngredients();

    // so after this ^ we need to access service and subscribe to that  ingredientChanged enevt:
    this.shoppingListServiceProp.ingredientChanged
    .subscribe(
      // whenever ingredinets changs =>
      (ingredientsss: Ingredient[]) => {
        this.ingredients = ingredientsss
      }
    )
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }         Manage from service
}
