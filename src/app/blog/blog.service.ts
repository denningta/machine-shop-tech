import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostQueryResult } from '../services/queries.groq';
import { SanityService } from '../services/sanity.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  posts$!: Observable<BlogPostQueryResult[]>

  constructor(private sanityService: SanityService) {
    this.posts$ = this.sanityService.getBlogData();
  }
}
