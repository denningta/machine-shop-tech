import { Injectable, Type } from '@angular/core';
import sanityClient from '@sanity/client';
import { from, Observable } from 'rxjs';
import { LandingPageQueryResult, landingPagesQuery, routesQuery, RoutesQueryResult } from './queries.groq';
import type * as Schema from '../interfaces/sanity-schema';

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor() { }

  client = sanityClient({
    projectId: '6xnf6evu',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
  });

  landingPage(): Observable<LandingPageQueryResult> {
    return from(this.client.fetch(landingPagesQuery));
  }

  routes(): Observable<RoutesQueryResult> {
    return from(this.client.fetch(routesQuery));
  }

}
