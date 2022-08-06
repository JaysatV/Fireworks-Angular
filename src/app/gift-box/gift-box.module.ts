import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftBoxComponent } from './gift-box.component';
import { GiftBoxRoutingModule } from './gift-box-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GiftBoxRoutingModule
  ],
  declarations: [GiftBoxComponent]
})
export class GiftBoxModule { }
