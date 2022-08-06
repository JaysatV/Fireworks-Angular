import { HttpBackendServiceService } from './../services/HttpBackendService.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderesRoutingModule } from './orders-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  imports: [
    CommonModule,
    OrderesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    NgxUiLoaderModule,
    MatSnackBarModule
  ],
  declarations: [OrdersComponent],
  providers: [HttpBackendServiceService]
})
export class OrdersModule { }
