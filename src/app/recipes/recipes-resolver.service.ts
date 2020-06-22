import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Recipe } from './recipe.model';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import * as RecipeActions from '../recipes/store/recipe.actions';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap, tap } from 'rxjs/operators';
import { NEVER, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.store.select('recipes').pipe(
    //   map(recipeState => recipeState.recipes),
    //   map(recipes => recipes.length === 0),
    //   switchMap(empty => {
    //     console.log(empty);
    //     if (empty) {
    //       this.store.dispatch(new RecipeActions.FetchRecipes());
    //       return this.actions$.pipe(
    //         ofType(RecipeActions.SET_RECIPES),
    //         take(1)
    //       );
    //     }
    //     return NEVER;
    //   })
    // );
    return this.store.select('recipes').pipe(
      take(1),
      map(recipeState => recipeState.recipes),
      switchMap(recipes => {
        if (recipes.length === 0) {
          this.store.dispatch(new RecipeActions.FetchRecipes());
          return this.actions$.pipe(
            ofType(RecipeActions.SET_RECIPES),
            take(1)
          );
        }
        return of(recipes);
      })
    );
  }
}
