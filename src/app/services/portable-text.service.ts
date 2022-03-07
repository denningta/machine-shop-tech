import { Injectable } from '@angular/core';
import { BlockContent } from '../interfaces/sanity-schema';
import { toHTML } from '@portabletext/to-html';

@Injectable({
  providedIn: 'root'
})
export class PortableTextService {

  constructor() { }

  renderPortableText(blockContent: BlockContent): string {
    const renderedHTML = toHTML(blockContent);
    return renderedHTML
  }
}
