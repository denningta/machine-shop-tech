import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import _, { concat } from 'lodash';
import { filter, Observable, share, shareReplay, Subject, tap } from 'rxjs';

export interface MenuItem {
  label: string;
  url: string[];
  icon: string; // Google fonts icon https://fonts.google.com/icons?selected=Material+Icons&icon.query=write
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private _menuItems$ = new Subject<MenuItem[]>() ;
  menuItems$!: Observable<MenuItem[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.menuItems$ = this._menuItems$.asObservable().pipe(shareReplay(1));
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this._menuItems$.next(this.createBreadcrumbs(route.root));
      });
    this.menuItems$.subscribe();
  }

  createBreadcrumbs(route: ActivatedRoute, url: string[] = [], breadcrumbs: MenuItem[] = [], ): any {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) return breadcrumbs;

    for (const child of children) {
      const urlSegmentPaths = child.snapshot.url.map(segment => segment.path)
      url = _.concat(url, urlSegmentPaths)
      
      const label = child.snapshot.data['breadcrumb']
      const icon = child.snapshot.data['breadcrumbIcon']
      if (!(label === null || label === undefined)) breadcrumbs.push({label, url, icon})

      return this.createBreadcrumbs(child, url, breadcrumbs);
    };
  }
}
