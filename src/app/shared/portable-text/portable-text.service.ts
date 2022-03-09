import { Injectable } from '@angular/core';
import { BlockContent } from '../../interfaces/sanity-schema';
import { PortableTextHtmlComponents, toHTML } from '@portabletext/to-html';
import { SanityService } from 'src/app/services/sanity.service';

@Injectable({
  providedIn: 'root'
})
export class PortableTextService {
  components: Partial<PortableTextHtmlComponents> = {
    types: {
      image: ({value}) => {
        return `
          <div class="image-container">
            <img src="${this.sanityService.urlFor(value)}" />
          </div>
        `;
      }
    }
  }

  constructor(private sanityService: SanityService) { }

  renderPortableText(blockContent: BlockContent): string {
    const renderedHTML = toHTML(blockContent, {components: this.components});
    return renderedHTML;
  }
}
