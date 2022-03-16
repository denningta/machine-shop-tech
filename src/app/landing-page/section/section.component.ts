import { Component, Input, OnInit } from '@angular/core';
import { fadeInRight, fadeInDown, fadeInUp, fadeOutUp, fadeOutRight, fadeInLeft, fadeOutLeft } from 'src/app/animations/fade';
import { Service } from 'src/app/interfaces/sanity-schema';
import { SanityService } from 'src/app/services/sanity.service';
import { PortableTextService } from 'src/app/shared/portable-text/portable-text.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
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

  constructor(
    public sanityService: SanityService,
    private portableTextService: PortableTextService
  ) {}

  ngOnInit(): void {
    if (!this.service) return;
    this.descriptionHTML = this.portableTextService.renderPortableText(this.service.description!)
  }

}
