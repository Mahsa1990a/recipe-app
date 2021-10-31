import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  // Inject recipe service:
  constructor(private recipeServiceProp: RecipeService) { }

  ngOnInit(): void {
  }

  // method for To Shopping List(in button)
  onAddToShoppingList() {
    this.recipeServiceProp .addIngredinetsToShoppingList(this.recipe.ingredients);
  }

}
