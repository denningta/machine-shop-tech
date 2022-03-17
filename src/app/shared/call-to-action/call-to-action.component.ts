import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
  emailInput = new FormControl('');
  
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.emailInput, this.callToAction.route);
    this.router.navigate([this.callToAction.route]);
  }

}
