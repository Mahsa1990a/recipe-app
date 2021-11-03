import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // bind this property from outside
  @Input() recipe: Recipe;
  // it contains no information so ========> <void>
  // @Output() recipeSelected = new EventEmitter<void>(); don't want to emit but:
  // want to call some methods in service, which will then transfert this data

  // Inject recipe service:
  // constructor(private recipeServiceProp: RecipeService) { }

  ngOnInit(): void {
  }

  // onSelected() {
  //   // this.recipeSelected.emit();
  //   this.recipeServiceProp.recipeSelectedMethod(this.recipe);
  // }
}
