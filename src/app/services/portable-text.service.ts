import { Injectable } from '@angular/core';
import { BlockContent } from '../interfaces/sanity-schema';

@Injectable({
  providedIn: 'root'
})
export class PortableTextService {

  constructor() { }

  renderPortableText(blockContent: BlockContent) {
    console.log(blockContent);
  }
}
