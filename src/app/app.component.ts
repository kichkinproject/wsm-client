import { Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { GetLoaded, GetTheme, State } from './_state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wsm',
  template: `
        <router-outlet></router-outlet>
        <!--<dynamic-host></dynamic-host>-->
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy  {
  private theme: string;
  private subscriptions: Subscription[] = [];

  constructor(private meta: Meta,
              private renderer: Renderer2,
              private elementRef: ElementRef,
              private router: Router,
              // private versionService: VersionService,
              private store: Store<State>) {
    // this.meta.addTag({ name: 'version', content: environment.version });
    this.subscriptions.push(
      this.store.pipe(select(GetLoaded)).subscribe(stat => this.toggleApp(stat)),
      this.store.pipe(select(GetTheme)).subscribe(theme => this.toggleTheme(theme))
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s: Subscription) => s.unsubscribe());
  }

  private toggleApp(status: boolean) {
    document.getElementById('app-loading').style.display = (status) ? 'none' : 'flex';
    this.elementRef.nativeElement.style.display = (status) ? 'flex' : 'none';
  }

  private toggleTheme(theme: string) {
    if (this.theme !== theme) {
      this.renderer.removeClass(document.body, `theme-${this.theme}`);
      this.theme = theme;
      this.renderer.addClass(document.body, `theme-${this.theme}`);
    }
  }
}
