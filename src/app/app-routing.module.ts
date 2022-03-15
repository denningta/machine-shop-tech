import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogLayoutComponent } from './blog/blog-layout/blog-layout.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'root', redirectTo:'' },
  { path: 'blog', component: BlogComponent, data: { breadcrumb: 'Blog', breadcrumbIcon: 'history_edu' }, children: [
    { path: '', component: BlogLayoutComponent, data: { breadcrumb: null } },
    { path: 'latest', component: BlogLayoutComponent, data: { breadcrumb: 'Latest', breadcrumbIcon: 'today' } },
    { path: 'featured', component: BlogLayoutComponent, data: { breadcrumb: 'Featured', breadcrumbIcon: 'push_pin' } },
    { path: ':id', component: PostComponent, data: { breadcrumb: 'Post', breadcrumbIcon: 'article' } },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
