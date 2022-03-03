import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { toHTML } from '@portabletext/to-html';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnChanges {
  @Input() callToAction!: {
    title: string;
    route: string;
    style: 'primary' | 'secondary';
  }
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: any;
  @Input() imageUrl!: string;

  descriptionHTML!: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.descriptionHTML = toHTML(changes['description'].currentValue);
    console.log(this.descriptionHTML) 
  }

}
