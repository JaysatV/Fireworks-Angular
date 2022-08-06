import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  declarations: [AboutUsComponent]
})
export class AboutUsModule { }
