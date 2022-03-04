import { NgTemplateOutlet } from '@angular/common';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NavItem } from '../../interfaces/sanity-schema';

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.scss']
})
export class NavigationItemsComponent implements OnInit {
  @Input() navItems: NavItem[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
