import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortableTextComponent } from './portable-text.component';



@NgModule({
  declarations: [PortableTextComponent],
  imports: [
    CommonModule
  ],
  exports: [PortableTextComponent]
})
export class PortableTextModule { }
