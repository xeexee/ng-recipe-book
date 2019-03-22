import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../RecipeBook/recipe.service';

@Component({
  selector: 'acp-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: []
})
export class RecipeBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
}
