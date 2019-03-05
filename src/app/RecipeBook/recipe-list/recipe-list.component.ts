import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Model/recipe.model'

@Component({
  selector: 'acp-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output('recipeSelected') recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('test recipe','just a test','https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
    new Recipe('test recipe 2','just a test 2','https://www.wellplated.com/wp-content/uploads/2018/03/Easy-Cream-of-Asaragus-Soup-600x900.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe)
  {
    this.recipeSelected.emit(recipe);
  }

}
