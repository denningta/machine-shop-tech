import { Injectable, Type } from '@angular/core';
import sanityClient from '@sanity/client';
import { from, Observable, Subject } from 'rxjs';
import { LandingPageQueryResult, getlandingPageQuery, routesQuery, RoutesQueryResult, BlogPostQueryResult, getBlogPosts } from './queries.groq';
import type * as Schema from '../interfaces/sanity-schema';
import { client } from './queries.groq';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  landingPageData$!: Observable<LandingPageQueryResult>;
  blogPostData$!: Observable<BlogPostQueryResult>;

  constructor(private router: Router,) {
    const route = router.url === '/' ? 'root' : router.url.substring(1);
    this.getlandingPageData(route);
  }

  getlandingPageData(route: string) {
    this.landingPageData$ = from(client.fetch(getlandingPageQuery(route)));
  }

  getBlogData() {
    return from(client.fetch(getBlogPosts()));
  }




}
