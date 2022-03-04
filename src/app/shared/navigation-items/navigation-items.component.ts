import { NgTemplateOutlet } from '@angular/common';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

interface NavigationItem {
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
  @Input() navigationItems!: NavigationItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
