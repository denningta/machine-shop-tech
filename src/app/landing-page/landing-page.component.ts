import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanityService } from '../services/sanity.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  pageData$;

  constructor(
    private sanityService: SanityService,
    private router: Router,
  ) {
    const route = router.url.substring(1)
    this.pageData$ = sanityService.landingPage(route);
    this.pageData$.subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit(): void {

  }


}
