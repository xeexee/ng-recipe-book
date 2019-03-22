import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Model/recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'acp-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input("recipe") recipe: Recipe;
  @Input() index: number;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
}
