import { Ingredient } from './Model/ingredient.model';
import { Subject } from 'rxjs/Subject'

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<Number>();

    private ingredients: Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient("Banana", 2)
    ];

    getIngredients()
    {
        return this.ingredients.slice();
    }

    getIngredient(index: number)
    {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[])
    {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient)
    {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number)
    {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}