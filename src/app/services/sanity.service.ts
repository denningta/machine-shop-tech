import { Injectable, Type } from '@angular/core';
import sanityClient from '@sanity/client';
import { from, Observable } from 'rxjs';
import { LandingPageQueryResult, getlandingPageQuery, routesQuery, RoutesQueryResult } from './queries.groq';
import type * as Schema from '../interfaces/sanity-schema';
import { client } from './queries.groq';

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor() { }

  landingPage(route: string): Observable<LandingPageQueryResult> {
    return from(client.fetch(getlandingPageQuery(route)));
  }


}
