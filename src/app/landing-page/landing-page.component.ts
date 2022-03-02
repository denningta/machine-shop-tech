import { Component, OnInit } from '@angular/core';
import { SanityService } from '../services/sanity.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  services!: any[];

  constructor(private sanityService: SanityService) { }

  ngOnInit(): void {
    this.getServices();
  }

  async getServices(): Promise<any[]> {
    this.services = await this.sanityService.getServices();
    console.log(this.services);
    return this.services;
  }

}
