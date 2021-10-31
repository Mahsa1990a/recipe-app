import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // putting service here and use it everywhere with recipe components
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  // Inject the service:
  constructor(private recipeServiceProp: RecipeService) { }

  ngOnInit(): void {
    this.recipeServiceProp.recipeSelected //subscribe to it and get informed about any change
    .subscribe(
      // recipe is argument and => {} is function body:
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );

  }

}
