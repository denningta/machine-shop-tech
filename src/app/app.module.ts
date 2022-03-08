import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageModule } from './landing-page/landing-page.module';
import { client, routesQuery, RoutesQueryResult } from './services/queries.groq'
import { Router } from '@angular/router';
import { from, Observable, tap } from 'rxjs';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationItemsModule } from './shared/navigation-items/navigation-items.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarModule } from './shared/toolbar/toolbar.module';
import { DroneIconModule } from './shared/drone-icon/drone-icon.module';
import { CommonModule } from '@angular/common';
import { BlogModule } from './blog/blog.module';

function initializeAppFactory(router: Router): () => Observable<RoutesQueryResult> {
  return () => from(client.fetch(routesQuery))
    .pipe(
      tap(sanityRoutes => {
        const routerConfig = router.config
        sanityRoutes.forEach(sanityRoute => {
          if (!sanityRoute.connectedPage) return;
          routerConfig.push(
            { 
              path: sanityRoute.route === 'root' ? '' : sanityRoute.route, 
              component: LandingPageComponent 
            }
          )
        });
        router.resetConfig(routerConfig);
      })
    )
 }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingPageModule,
    NavigationItemsModule,
    MatSidenavModule,
    MatIconModule,
    ToolbarModule,
    DroneIconModule,
    BlogModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    deps: [Router],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
