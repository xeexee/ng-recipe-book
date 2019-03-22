import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../Model/recipe.model'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'acp-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (newRecipes: Recipe[]) => {this.recipes = newRecipes}
    );
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  onNewRecipe()
  {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
