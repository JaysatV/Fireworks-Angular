
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SceenSizeServicesService } from './shared/sceen-size-services.service';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    NgbCollapseModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [SceenSizeServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
