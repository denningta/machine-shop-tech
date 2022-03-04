import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { toHTML } from '@portabletext/to-html';
import { Service } from 'src/app/interfaces/sanity-schema';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnChanges {
  @Input() service!: Service;

  descriptionHTML!: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.service);
    console.log(this.service.description)
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
