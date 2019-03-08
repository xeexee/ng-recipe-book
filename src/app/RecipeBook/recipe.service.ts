import { Recipe } from './Model/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../ShoppingList/Model/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Burger',
            'Simple as that!',
            'https://domdomhamburger.com/images/common/nav_b_blt.jpg',
            [
                new Ingredient("Meat", 1),
                new Ingredient("Cheese", 2),
                new Ingredient("Tomato Sauce", 1)
            ]),
        new Recipe('Sandwich',
            'Very british.',
            'https://kinarino.k-img.com/system/press_images/001/190/330/2cb960f132a3484564ed1a0fe704e9b8f2a8abd9.jpg?1520344124',
            [
                new Ingredient("Steak", 1),
                new Ingredient("Tomato", 3),
                new Ingredient("Bread", 2)
            ])
    ]

    getRecipes() {
        return this.recipes.slice();
    }
}