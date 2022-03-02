import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() callToAction!: {
    title: string;
    route: string;
    style: 'primary' | 'secondary';
  }
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
