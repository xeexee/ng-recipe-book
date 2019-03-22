import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './RecipeBook/recipe.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Recipe } from './RecipeBook/Model/recipe.model';
import { AuthService } from './auth/auth.service';

@Injectable()
export class HttpService {
    constructor(private client: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }
    public items: Observable<any[]>;
    SaveData() {
        const token = this.authService.getToken();
        return this.client.put('https://ng-recipe-book-829ac.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    FetchData() {
        const token = this.authService.getToken();

        return this.client.get('https://ng-recipe-book-829ac.firebaseio.com/recipes.json?auth=' + token)
            .map((response: Response) => {
                let result: Recipe[] = <Recipe[]><unknown>response;

                for (let recipe of result) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return result;
            })
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            });
    }
}
