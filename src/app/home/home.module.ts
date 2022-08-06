import { HttpBackendServiceService } from './../services/HttpBackendService.service';
import { BrandsComponent } from './brands/brands.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeRoutingModule } from './home-routing.module';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MatButtonModule,
    NgbCollapseModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  declarations: [HomeComponent, NewArrivalsComponent, ProductsComponent, BrandsComponent, ServicesComponent, BankDetailsComponent],
  providers: [HttpBackendServiceService]
})
export class HomeModule { }
