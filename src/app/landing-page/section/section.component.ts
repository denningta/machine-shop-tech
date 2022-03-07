import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { toHTML } from '@portabletext/to-html';
import { fadeInRight, fadeInDown, fadeInUp, fadeOutUp, fadeOutRight, fadeInLeft, fadeOutLeft } from 'src/app/animations/fade';
import { Service } from 'src/app/interfaces/sanity-schema';
import { PortableTextService } from 'src/app/services/portable-text.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnChanges {
  @Input() service!: Service;
  @Input() odd: boolean = true;

  fadeInRight = fadeInRight;
  fadeInDown = fadeInDown;
  fadeInUp = fadeInUp;
  fadeOutUp = fadeOutUp;
  fadeOutRight = fadeOutRight;
  fadeInLeft = fadeInLeft;
  fadeOutLeft = fadeOutLeft;

  descriptionHTML!: string;

  constructor(private portableTextService: PortableTextService) {}

  ngOnInit(): void {
    if (!this.service) return;
    this.descriptionHTML = this.portableTextService.renderPortableText(this.service.description!)
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
