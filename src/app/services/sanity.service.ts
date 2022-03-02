import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';

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

  async getServices(): Promise<any[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*`
    );
  }


}
