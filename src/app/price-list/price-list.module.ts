import { HttpBackendServiceService } from './../services/HttpBackendService.service';
import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListComponent } from './price-list.component';
import { PriceListRoutingModule } from './price-list-routing.module';
import { SceenSizeServicesService } from '../shared/sceen-size-services.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,
    PriceListRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  declarations: [PriceListComponent],
  providers: [HttpBackendServiceService]
})
export class PriceListModule { }
