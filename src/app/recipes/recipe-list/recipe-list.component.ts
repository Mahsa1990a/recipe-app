import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../recipes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // the type is Recipe Model
  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
