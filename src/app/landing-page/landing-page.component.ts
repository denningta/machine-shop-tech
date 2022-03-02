import { Component, OnInit } from '@angular/core';
import { services } from './structured-content-data';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  services = services;

  constructor() { }

  ngOnInit(): void {
  }

  openSideNav(): void {
  }

}
