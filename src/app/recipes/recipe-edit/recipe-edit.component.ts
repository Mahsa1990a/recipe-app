import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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

  onSubmit() {
    console.log("recipeForm ==> ", this.recipeForm)
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredientss')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredientss')).push(
      new FormGroup({
        "name": new FormControl(null, Validators.required),
        "amount": new FormControl(null, [
          Validators.required,
          // allow any number > 0
          Validators.pattern(/^[1-9]+[0+9]*$/)
        ])
      })
    )
  }

  private initializeForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeSrvice.getRecipeById(this.id)
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']){ //if we have recipe and it does ingredients
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name' : new FormControl(ingredient.name, Validators.required),
            'amount' : new FormControl(ingredient.amount, [
              Validators.required,
              // allow any number > 0
              Validators.pattern(/^[1-9]+[0+9]*$/)
            ]),
          }));
        }
      }
      // recipeIngredients = ;

    }

    this.recipeForm = new FormGroup({
      'namee': new FormControl(recipeName, Validators.required),
      'imagePathh': new FormControl(recipeImage, Validators.required),
      'descriptionn': new FormControl(recipeDescription, Validators.required),
      'ingredientss' : recipeIngredients
    });
  }



}
