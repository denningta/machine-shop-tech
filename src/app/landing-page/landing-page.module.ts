import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarModule } from '../shared/toolbar/toolbar.module';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationItemsModule } from '../shared/navigation-items/navigation-items.module';
import { CallToActionModule } from '../shared/call-to-action/call-to-action.module';
import { DroneIconModule } from '../shared/drone-icon/drone-icon.module';
import { AnimateOnScrollModule } from '../directives/animate-on-scroll/animate-on-scroll.module';
import { PortableTextModule } from '../shared/portable-text/portable-text.module';


@NgModule({
  declarations: [LandingPageComponent, HeaderComponent, SectionComponent],
  imports: [
    CommonModule,
    MatIconModule,
    ToolbarModule,
    MatSidenavModule,
    NavigationItemsModule,
    CallToActionModule,
    DroneIconModule,
    AnimateOnScrollModule,
    PortableTextModule,
  ],
  exports: [LandingPageComponent]
})
export class LandingPageModule { }
