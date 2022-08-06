import { HttpBackendServiceService } from './../services/HttpBackendService.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  PhoneNumber = new FormControl('');
  hasPhoneNumber: boolean = false;
  OrdersData: any[] = [];
  constructor( private services: HttpBackendServiceService,
               private ngxService: NgxUiLoaderService,
               private snackBar: MatSnackBar
              ) { }

  ngOnInit() {
    
    if(this.getLoginStatus()){
      this.hasPhoneNumber = true;
      this.getOrders(localStorage.getItem('customer_phone'));
    } 
  }

  getPhoneNumber() {
    return localStorage.getItem('customer_phone');
  }

  getOrders(phone_number: any) {
    this.ngxService.start();
    this.services.getOrder(phone_number).subscribe(response => {
     
      this.OrdersData = response;
      this.ngxService.stop();
    });
  }

  onClickSubmit() {
    
    if(this.PhoneNumber.value != '') {
      this.ngxService.start();
      this.services.getOrder(this.PhoneNumber.value).subscribe(response => {
        this.hasPhoneNumber = true;
        localStorage.setItem('customer_phone', this.PhoneNumber.value );
        this.OrdersData = response;
        this.ngxService.stop();
      });
    } else {
      this.snackBar.open('Invalid Phone Number', '', {
        duration: 3000
      });
    }
    
    
  }
  
  getLoginStatus(): boolean {
    if(localStorage.getItem('customer_phone') != '' && localStorage.getItem('customer_phone') != null){
      return true;
    }else {
      return false;
    } 
  }

  onLogout() {
    localStorage.setItem('customer_phone', '');
    this.hasPhoneNumber = false;
  }

  getOrderStatus(status: string) : string {
    let statusValue = '';
    switch (status) {
      case '1' : {
        statusValue = 'Processing';
        break;
      }
      case '2' : {
        statusValue = 'Accepted';
        break;
      }
      case '3' : {
        statusValue = 'Delivered';
        break;
      }
    }
    return statusValue;
  }
}
