import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetConfig, State } from './_state';
import { LayoutSetConfig } from './_state/actions/layout.actions';
import { environment } from '../environments/environment';
import { select, Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';

@Injectable()
export class AppConfig {
  public get ServerName(): string {
    return this.getConfig('apiServer');
  }

  public get Protocol(): string {
    return 'http';
  }

  public get WebApiUrl(): string {
    return `${this.Protocol}://${this.ServerName}/WebScriptManager`;
  }

  constructor(private http: HttpClient,
              private store: Store<State>) {
    this.store.pipe(select(GetConfig)).subscribe(config => this.config = config);
  }

  private config = null;

  public load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`env.json`).pipe(
        catchError((error: any) => {
          console.error('Error reading ' + (environment.production ? 'production' : 'develop') + ' configuration file');
          return throwError(error.message || 'Server error');
        })
      ).subscribe((response: any) => {
        this.store.dispatch(new LayoutSetConfig(response));
        return resolve(true);
      });
    });
  }

  public getConfig(key: any): any {
    return this.config[key];
  }

  public setConfig(key: any, value: boolean): any {
    this.config[key] = value;
  }
}

export class ThemeConfig {
  public static Theme = 'light';
}
