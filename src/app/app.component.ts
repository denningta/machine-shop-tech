import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimateOnScrollService } from './directives/animate-on-scroll/animate-on-scroll.service';
import { SanityService } from './services/sanity.service';

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
  ) {
    const route = router.url === '/' ? 'root' : router.url.substring(1);
    this.pageData$ = sanityService.landingPage(route);
  }

  onScroll(event: Event) {
    this.animateOnScroll.onScroll(event);
  }
}
