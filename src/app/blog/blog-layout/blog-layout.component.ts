import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.scss']
})
export class BlogLayoutComponent implements OnInit {

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot);
    this.route.url.subscribe(value => console.log(value));
  }

}
