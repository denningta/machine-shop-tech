import { Component, HostListener } from '@angular/core';
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

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onWindowScroll(event: Event) {
  //   console.log('window scroll')
  // }


  fillerContent = Array.from({length: 50}, () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

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
