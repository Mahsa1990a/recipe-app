import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from "../../recipes/recipe.model";
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // the type is Recipe Model
  recipes: Recipe[] = [
    //create a new obj based on our Recipe class:
    // new Recipe("A Test Recipe", "This is TEST", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    // new Recipe("Anotherrrrrr Test Recipe", "This is TEST", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")
    // we want to get recipes from service:
  ];

  // we need to inject our service:
  constructor(private recipeServiceProp: RecipeService,
    private router: Router,
    private route: ActivatedRoute )
  { }

  ngOnInit(): void {
    this.recipes = this.recipeServiceProp.getRecipes();//get copy of recipe arr from service
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
    // to target the path I want to go to:(we're already in /recipes here, so add new as relative route)
    // need to inform router about current route by adding relativeTo
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
