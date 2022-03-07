import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavItem } from 'src/app/interfaces/sanity-schema';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() navItems!: NavItem[];
  @Output() menuClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick() {
    this.menuClick.emit();
  }

}
