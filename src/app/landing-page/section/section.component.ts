import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { toHTML } from '@portabletext/to-html';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnChanges {
  @Input() callToAction!: {
    buttonText: string;
    style: 'primary' | 'secondary';
    route: string;
  }
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: any;

  descriptionHTML!: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.descriptionHTML = toHTML(changes['description'].currentValue);
  }

}
