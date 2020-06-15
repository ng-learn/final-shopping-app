import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  // providers: [LoggingService]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private loggingService: LoggingService) {}

  ngOnInit() {
    this.loggingService.printLog('Hello from RecipeItemComponent ngOnit');
  }
}
