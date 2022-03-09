import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { combineLatestWith, filter, Observable, shareReplay, tap } from 'rxjs';
import { BreadcrumbService, MenuItem } from './breadcrumb.service';



@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$!: Observable<MenuItem[]>;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.breadcrumbs$ = this.breadcrumbService.menuItems$;
  }

  navigate(url: string[]) {
    console.log(url);
    this.router.navigate(url);
  }

}
