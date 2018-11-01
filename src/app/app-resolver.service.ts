import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LayoutLoaded } from './_state/actions/layout.actions';
import { State } from './_state';
import { WsmDataService } from './services/wsm-data.service';
import { Store } from '@ngrx/store';
import { AccountService } from './services/account.service';
import { forkJoin, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable()
export class AppResolverService implements Resolve<boolean> {
  constructor(private accountService: AccountService,
              private dataService: WsmDataService,
              private store: Store<State>) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return forkJoin(
      // здесь будет запрос первоначальных данных к dataService
    ).pipe(
      flatMap(dicts => {
        this.store.dispatch(new LayoutLoaded(true));
        return of(true);
      }),
    );
  }
}
