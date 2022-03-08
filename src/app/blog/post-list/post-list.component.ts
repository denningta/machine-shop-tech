import { Component, Input, OnInit } from '@angular/core';
import { BlogPostQueryResult, client } from 'src/app/services/queries.groq';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import _ from 'lodash';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() listCategory: 'latest' | 'featured' | undefined;
  @Input() posts!: BlogPostQueryResult[];

  imageBuilder = imageUrlBuilder(client)
  listTitle: string = 'Posts';
  latestPosts!: BlogPostQueryResult[];
  featuredPosts!: BlogPostQueryResult[];

  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {
    this.blogService.posts$.subscribe(posts => {
      console.log(posts);
      this.getLatestPosts(posts);
      this.getFeaturedPosts(posts);
      console.log(this.featuredPosts)
    });
  }

  ngOnInit(): void {
    console.log(this.posts);
    if (this.listCategory === 'latest') this.listTitle = 'Latest Posts';
    if (this.listCategory === 'featured') this.listTitle = 'Featured Posts';
  }

  getLatestPosts(posts: BlogPostQueryResult[]) {
    this.latestPosts = _.sortBy(posts, (post) => {
      if (!post.publishedAt) return;
      return new Date(post.publishedAt);
    }).slice(0, 3);
  }

  getFeaturedPosts(posts: BlogPostQueryResult[]) {
    this.featuredPosts = posts.filter((post) => post.featured);
  }

  urlFor(source: SanityImageSource) {
    return this.imageBuilder.image(source);
  }

  selectPost(slug: any) {
    if (!slug) return;
    this.router.navigate(['/blog', slug.current]);
  }

}
