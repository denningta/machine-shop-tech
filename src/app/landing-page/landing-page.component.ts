import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimateOnScrollService } from '../directives/animate-on-scroll/animate-on-scroll.service';
import { SanityService } from '../services/sanity.service';
import { fadeInRight, fadeInDown, fadeInUp, fadeOutUp } from 'src/app/animations/fade';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  pageData$;
  fadeInRight = fadeInRight;
  fadeInDown = fadeInDown;
  fadeInUp = fadeInUp;
  fadeOutUp = fadeOutUp;

  constructor(
    private sanityService: SanityService,
    private router: Router,
    private animateOnScroll: AnimateOnScrollService,
  ) {
    this.pageData$ = sanityService.landingPageData$;
  }

  ngOnInit(): void {
  }

  onScroll(event: Event) {
    this.animateOnScroll.onScroll(event);
  }

}
