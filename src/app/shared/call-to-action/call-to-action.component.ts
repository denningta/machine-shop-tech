import { Component, Input, OnInit } from '@angular/core';
import { CallToAction } from 'src/app/interfaces/sanity-schema';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  @Input() callToAction!: Omit<CallToAction, 'route'> & {
    route: string;
  };
  
  constructor() {}

  ngOnInit(): void {
  }

}
