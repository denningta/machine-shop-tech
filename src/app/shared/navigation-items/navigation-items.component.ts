import { NgTemplateOutlet } from '@angular/common';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

interface NavigationItem {
  id: number;
  title: string;
  route: string;
  icon: string; // From material icon library https://fonts.google.com/icons?selected=Material+Icons&icon.query=air
}

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.scss']
})
export class NavigationItemsComponent implements OnInit {
  @Input() navigationItems: NavigationItem[] = [
    {
      id: 1,
      title: 'Home',
      route: '/',
      icon: 'home'
    },
    {
      id: 2,
      title: 'About',
      route: '/about',
      icon: 'info'
    },
    {
      id: 3,
      title: 'Services',
      route: '/services',
      icon: 'agriculture'
    },
    {
      id: 4,
      title: 'Blog',
      route: '/blog',
      icon: 'article'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
