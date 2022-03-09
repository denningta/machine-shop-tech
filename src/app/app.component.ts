import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AnimateOnScrollService } from './directives/animate-on-scroll/animate-on-scroll.service';
import { SanityService } from './services/sanity.service';
import { BreadcrumbService } from './shared/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'precision-aero';
  pageData$;

  constructor(
    private animateOnScroll: AnimateOnScrollService,
    private sanityService: SanityService, 
    private router: Router, 
    private breadCrumbService: BreadcrumbService
  ) {
    this.pageData$ = this.sanityService.landingPageData$;
  }

  onScroll(event: Event) {
    this.animateOnScroll.onScroll(event);
  }
}
