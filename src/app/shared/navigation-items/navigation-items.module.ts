import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemsComponent } from './navigation-items.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [NavigationItemsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [NavigationItemsComponent]
})
export class NavigationItemsModule { }
