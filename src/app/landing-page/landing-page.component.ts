import { Component, OnInit } from '@angular/core';
import { SanityService } from '../services/sanity.service';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  pageData$;

  constructor(private sanityService: SanityService) {
    this.pageData$ = sanityService.landingPage();
    this.pageData$.subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit(): void {

  }


}
