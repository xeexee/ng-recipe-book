import { Recipe } from './Model/recipe.model';
import { Ingredient } from '../ShoppingList/Model/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
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

    getRecipe(id: number){
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe)
    {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe)
    {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number)
    {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[])
    {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}