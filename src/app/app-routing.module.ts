import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { 
    path: '', component: LandingPageComponent },
  { path: 'root', redirectTo:'' },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
