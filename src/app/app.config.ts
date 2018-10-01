import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
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

  public getConfig(key: any): any {
    return this.config[key];
  }

  // constructor(private http: HttpClient,
  //             private store: Store<State>) {
  //   this.store.pipe(select(GetConfig)).subscribe(config => this.config = config);
  // }

  private config = null;



  public setConfig(key: any, value: boolean): any {
    this.config[key] = value;
  }
}
