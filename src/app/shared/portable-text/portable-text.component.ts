import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BlockContent } from 'src/app/interfaces/sanity-schema';
import { SanityService } from 'src/app/services/sanity.service';
import { PortableTextService } from './portable-text.service';

@Component({
  selector: 'app-portable-text',
  templateUrl: './portable-text.component.html',
  styleUrls: ['./portable-text.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PortableTextComponent implements OnInit {
  @Input() portableText!: BlockContent;
  renderedHtml = 'No data found.';

  constructor(
    private portableTextService: PortableTextService,
  ) {}

  ngOnInit(): void {
    this.renderedHtml = this.portableTextService.renderPortableText(this.portableText);
  }

}
