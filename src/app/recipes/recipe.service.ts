import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('A Second Test Recipe', 'This is the second test description',
      'https://assets.bonappetit.com/photos/57adece91b3340441497571a/16:9/w_1000,c_limit/pear-pie-with-red-wine-and-rosemary1.jpg')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    // returns exact copy of the array, so that nothing else can access the array from outside the service
    return this.recipes.slice();
  }



}
