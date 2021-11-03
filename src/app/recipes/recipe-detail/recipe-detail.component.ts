import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  // Inject recipe service:
  constructor(private recipeServiceProp: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // we have 2 ways of retrieving id:
    // const id = this.route.snapshot.params['id']; //it will only work for first time we load detail component
    // react to changes of recipe id:
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // fetch new recipe:
          this.recipe = this.recipeServiceProp.getRecipeById(this.id);
        }
      );

  }

  // method for To Shopping List(in button)
  onAddToShoppingList() {
    this.recipeServiceProp .addIngredinetsToShoppingList(this.recipe.ingredients);
  }

}
