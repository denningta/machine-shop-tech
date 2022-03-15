import { Injectable, Type } from '@angular/core';
import sanityClient from '@sanity/client';
import { from, Observable, Subject } from 'rxjs';
import { LandingPageQueryResult, getlandingPageQuery, routesQuery, RoutesQueryResult, BlogPostQueryResult, getBlogPosts } from './queries.groq';
import { client } from './queries.groq';
import { ActivatedRoute, Router } from '@angular/router';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  imageBuilder = imageUrlBuilder(client);
  landingPageData$!: Observable<LandingPageQueryResult>;
  blogPostData$!: Observable<BlogPostQueryResult>;
  

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    const routeUrl = router.url === '/' ? 'root' : router.url.substring(1);
    this.getlandingPageData(routeUrl);
  }

  getlandingPageData(route: string | undefined) {
    if (!route) return;
    this.landingPageData$ = from(client.fetch(getlandingPageQuery(route)));
  }

  getBlogData() {
    return from(client.fetch(getBlogPosts()));
  }

  urlFor(source: SanityImageSource) {
    return this.imageBuilder.image(source);
  }


}
