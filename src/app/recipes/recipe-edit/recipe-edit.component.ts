import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  // editing recipe or create new one:
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeSrvice: RecipeService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          //whenever premeters change:
          this.editMode = params['id'] != null;//(params['id'] != null) means does it have the id
          console.log("EditMode => ", this.editMode);
          // if it doesn't have id(.../recipes/new) => editMode is false, if it has an id(.../recipes/id/edit) => editMode is true

          // we should call initializeForm whanever our route params changes(indicates we reloaded the page)
          this.initializeForm();
        }
      )
  }

  private initializeForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeSrvice.getRecipeById(this.id)
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImage),
      'description': new FormControl(recipeDescription)
    });
  }

}
