import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headline: string | undefined;
  @Input() subHeadline: string | undefined;
  @Input() callToAction!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
