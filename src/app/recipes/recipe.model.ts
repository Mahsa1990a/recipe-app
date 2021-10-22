// it's a model (model is a ts file)
export class Recipe {
  // we can define how the recipe should look like in this class:
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
