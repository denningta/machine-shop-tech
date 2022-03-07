import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut } from '../animations/fadeIn';
import { AnimateOnScrollService } from '../directives/animate-on-scroll.service';
import { SanityService } from '../services/sanity.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [fadeInOut]
})
export class LandingPageComponent implements OnInit {
  pageData$;

  constructor(
    private sanityService: SanityService,
    private router: Router,
    private animateOnScroll: AnimateOnScrollService,
  ) {
    const route = router.url === '/' ? 'root' : router.url.substring(1);
    this.pageData$ = sanityService.landingPage(route);
  }

  ngOnInit(): void {
  }

  onScroll(event: Event) {
    this.animateOnScroll.onScroll(event);
  }

}
