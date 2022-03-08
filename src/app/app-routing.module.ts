import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { 
    path: '', component: LandingPageComponent },
  { path: 'root', redirectTo:'' },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
