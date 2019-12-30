import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() select: EventEmitter<Recipe> = new EventEmitter();
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.select.emit(this.recipe);
  }
}
