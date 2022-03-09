import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { withLatestFrom } from 'rxjs';
import { PortableTextService } from 'src/app/shared/portable-text/portable-text.service';
import { BlogPostQueryResult } from 'src/app/services/queries.groq';
import { SanityService } from 'src/app/services/sanity.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: BlogPostQueryResult | undefined;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    public sanityService: SanityService,
    public portableTextService: PortableTextService,
  ) {
    this.blogService.posts$.pipe(
      withLatestFrom(route.paramMap)
    ).subscribe(([posts, paramMap]) => {
      this.post = posts.find(post => {
        if (!post.slug) return false;
        return post.slug.current === paramMap.get('id');
      });
      console.log(this.post)
    })
  }

  ngOnInit(): void {
  }

}
