import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppResolverService } from './app-resolver.service';
import { AppGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/main/main.module#MainModule',
    resolve: {
      resolved: AppResolverService
    },
    canActivate: [AppGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AppGuard,
    AppResolverService
  ]
})
export class AppRoutingModule {
}
