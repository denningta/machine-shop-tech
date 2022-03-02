import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallToActionComponent } from './call-to-action.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CallToActionComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
  ],
  exports: [CallToActionComponent]
})
export class CallToActionModule { }
