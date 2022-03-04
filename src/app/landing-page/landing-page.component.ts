import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SanityService } from '../services/sanity.service';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  pageData$: Observable<any>;

  constructor(private sanityService: SanityService) {
    this.pageData$ = sanityService.getLandingPageData();
    this.pageData$.subscribe(value => console.log(value))
  }

  ngOnInit(): void {

  }


}
