import { Component, OnInit } from '@angular/core';
import { fadeInRight, fadeOutLeft } from '../animations/fade';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  fadeInRight = fadeInRight;
  fadeOutLeft = fadeOutLeft;

  constructor() {}

  ngOnInit(): void {
  }

}
