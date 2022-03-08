import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogLists: ("latest" | "featured" | undefined)[] =[
    'latest',
    'featured'
  ]

  constructor() {}

  ngOnInit(): void {
  }

}
