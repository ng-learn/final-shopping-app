import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducer';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipeActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>('https://final-shopping-app.firebaseio.com/recipes.json')
      .pipe(
        map((recipes: Recipe[]) => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
          });
        }),
        map(recipes => new RecipeActions.SetRecipes(recipes))
      );
    })
  );

  @Effect({ dispatch: false })
  storeRecipes = this.actions$.pipe(
    ofType(RecipeActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipeState]) => {
      return this.http.put(
        'https://final-shopping-app.firebaseio.com/recipes.json',
        recipeState.recipes
      );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromApp.AppState>) {}
}
