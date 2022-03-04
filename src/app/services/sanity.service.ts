import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor() { }

  sanityClientCredentials = {
    option: sanityClient({
      projectId: '6xnf6evu',
      dataset: 'production'
    })
  }

  getLandingPageData(): Observable<any> {
    return from(this.sanityClientCredentials.option.fetch(
      `*[_type == 'landingPage' && route.current == 'root'][0] {
        ...,
        callToAction->,
        "navItems": navItems[]->,
        "services": services[]->
      }`
    ))
  }

  async getAll(): Promise<any[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*`
    );
  }


}
