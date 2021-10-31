import { Ingredient } from "../shared/ingredient.model";

// it's a model (model is a ts file)
export class Recipe {
  // we can define how the recipe should look like in this class:
  public name: string;
  public description: string;
  public imagePath: string;
  // now we add ingredients:
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
