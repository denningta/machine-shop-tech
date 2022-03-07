import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { NavigationItemsModule } from '../navigation-items/navigation-items.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    NavigationItemsModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
