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

  toPlainText(blocks: BlockContent = []) {
    return blocks.map(block => {
      if (block._type !== 'block' || !block['children']) {
        return '';
      }
      return block['children'].map((child: any) => child.text).join('')
    }).join('\n\n');
  }

  toPreviewSnippet(blocks: BlockContent = [], wordCount: number) {
    const body = blocks.map(block => {
      if (block._type !== 'block' || !block['children'] || block['style'] !== 'normal') {
        return '';
      }
      return block['children'].map((child: any) => child.text).join('')
    }).join('\n');
    const snippet = body.split(' ').slice(0, wordCount).join(' ').concat('  ...');
    return snippet;
  }
}
