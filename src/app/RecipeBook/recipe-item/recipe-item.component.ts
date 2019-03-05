import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Model/recipe.model'

@Component({
  selector: 'acp-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input("recipe") recipe: Recipe;
  @Output('onSelect') selected = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    this.selected.emit();
  }

}
