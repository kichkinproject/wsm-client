import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { GetCurrentUser, State } from './_state';
import { LayoutSetUser } from './_state/actions/layout.actions';
import { Role, Roles } from './models/role';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { AccountService } from './services/account.service';

@Injectable()
export class AppGuard implements CanActivate {
  private $user: BehaviorSubject<Role> = new BehaviorSubject<Role>(null);

  constructor(private accountService: AccountService,
              private store: Store<State>) {
    this.store.pipe(select(GetCurrentUser)).subscribe(user => this.$user.next(user));
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (!this.$user.getValue()) {
      return this.accountService.currentUserInfo().pipe(
        flatMap(user => {
          this.setUser(user);
          return of(true);
        }));
    } else {
      return of(true);
    }
  }

  private setUser(user: any) {
    const role = new Role(user);
    this.store.dispatch(new LayoutSetUser(role));
  }
}

