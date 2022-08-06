import { HttpBackendServiceService } from './../services/HttpBackendService.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SceenSizeServicesService } from '../shared/sceen-size-services.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Product{
  id: number;
  product_code: string;
  product_name: string;
  product_name_ta: string;
  product_cat: string;
  product_unit: string;
  unit_per: number;
  unit_name: string;
  product_rate: number;
  product_stock: number;
  product_discount: number;
  visibility: number;
  p_off_rate: number;

  p_quantity: number;
  p_amount: number;
}

export interface GroupProducts {
  cat_id: number;
  cat_name: string;
  visibility: string;
  product_data: Product[];
}

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})

export class PriceListComponent implements OnInit {



  
  isDesktop: boolean | undefined;
  name = new FormControl('');

  order_amount: number = 0.00;
  sub_total: number = 0.00;
  discount_total: number = 0.00;
  paf: number = 0;
  items_count = 0;
  products: Product[] = [];
  groupProducts: GroupProducts[] = [];
  isLoading = false;
  discount = 0;
  router_id: any;
 
  CustomerName = new FormControl('');
  PhoneNumber = new FormControl('');
  Email = new FormControl('');
  Address = new FormControl('');

  siteLanguge = 'தமிழ் மொழிக்கு மாற்று';
  isEnglishLanguage = true;
  count = 0;
  groupProductsContainer: GroupProducts[] = [];
  constructor(private screenSizeServices: SceenSizeServicesService,
              private backendService: HttpBackendServiceService,
              private services: HttpBackendServiceService,
              private ngxService: NgxUiLoaderService,
              private route: ActivatedRoute,
              private viewPortScroller: ViewportScroller,
              private snackBar: MatSnackBar
    ) { 
    this.screenSizeServices.isDesktopView().subscribe(isDektop => {
      this.isDesktop = isDektop;
      
    });
  }
  
  ngOnInit() {
    this.isLoading = false;
    this.route.queryParams.subscribe(params => {
      this.router_id = params['id'];
    });
    this.ngxService.start();
    this.backendService.getGroupProducts().subscribe(response => {
      console.log(response);
      this.ngxService.stop();
      this.isLoading = true;
      
      response.forEach(item => {
        item.product_data.forEach(value => {
          
          value.p_off_rate = value.product_rate - (value.product_rate * value.product_discount) / 100;
          value.p_quantity = 0;
          value.p_amount = 0;
          
        });
      });

      this.groupProductsContainer = response;
      
      this.groupProducts = this.groupProductsContainer.slice(0, 3);
      setTimeout(() => { this.scrl(), 500});
      
    });

    this.backendService.getLatestSettings().subscribe(response => {
      this.paf = response['paf'];
      this.discount = response['discount'];

     
    });

    
    
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("iam scrolling");
      this.groupProducts = [...this.groupProductsContainer];
    }
  }

  scrl() {
    this.viewPortScroller.scrollToAnchor(this.router_id);
  }

  getCatItemsCount(items: Product[]): number {
    let count = 0;
    items.forEach(item => {
      if(item.visibility == 1) count++;
    })
    return count;
  }

  getProductImage(product: Product): string {
    return this.services.restImageUrl + 'products/p_' + product.id +'.jpg?lastmod=12345678' ;
  }

  onChangeQuantity($event: KeyboardEvent) {
    
    let patt = /^([0-9])$/;
    if(patt.test($event.key) || $event.key == 'Backspace' || $event.key == 'Tab' || $event.key == 'ArrowLeft' || $event.key == 'ArrowRight' || $event.key == 'ArrowUp' || $event.key == 'ArrowDown') {
      
    } else {
      return $event.preventDefault();
    }
    

    
    
  }

  changeQuantity($event: any,$evnt: KeyboardEvent, product: Product) {
   

    const previous_amount = product.p_quantity * product.p_off_rate;
    const previous_sub_total = product.p_quantity * product.product_rate;
    const previous_discount_total = (product.product_rate * product.p_quantity) * product.product_discount / 100;
    const previous_items_count = product.p_quantity
    product.p_quantity = +$event.target.value;
    
    this.order_amount = (this.order_amount - previous_amount) +  (product.p_quantity * product.p_off_rate);
    this.sub_total = (this.sub_total - previous_sub_total) +  (product.p_quantity * product.product_rate);
    this.discount_total = (this.discount_total - previous_discount_total) + (((product.p_quantity * product.product_rate) * product.product_discount)/100);
    this.items_count = this.items_count - previous_items_count + +$event.target.value;
  
  }
  
  onFocus($event: any) {
    if($event.target.value == 0) {
      $event.target.value = '';
     
    }
  }

  onFocusOut($event: any) {
    if($event.target.value == '') {
      $event.target.value = 0;
      
    }
  }

  onIncrement(product1: Product) {
    product1.p_quantity = product1.p_quantity + 1;
    this.order_amount = this.order_amount +  product1.p_off_rate;
    this.sub_total = +this.sub_total +  +product1.product_rate;
    this.discount_total = this.discount_total + ((product1.product_rate * product1.product_discount)/100);
    this.items_count = this.items_count + 1;
  }
  
  onDecrement(product1: Product) {
    if(product1.p_quantity > 0) {
      product1.p_quantity = product1.p_quantity - 1;
      this.order_amount = this.order_amount - product1.p_off_rate;
      this.sub_total = +this.sub_total -  +product1.product_rate;
      this.discount_total = this.discount_total - ((product1.product_rate * product1.product_discount)/100);
      this.items_count = this.items_count - 1;
    }
  }

  
  onConfirmOrder() {
    
    if(this.PhoneNumber.value != '' && this.PhoneNumber.value != null) {
      let orderItems: any[] = [];
      this.groupProducts.forEach(items => {
        items.product_data.forEach(product => {
          if(product.p_quantity > 0) orderItems.push({
            item_name: product.product_name,
            item_rate: product.product_rate,
            item_discount: product.product_discount,
            item_discount_total: product.p_off_rate,
            item_quantity: product.p_quantity,
            item_total: product.p_quantity * product.p_off_rate
          });
        });
      });
      
      if(orderItems.length > 0) {
        Swal.fire({
          title: 'Do you want to place order?',
          showDenyButton: true,
          confirmButtonText: 'confirm',
          denyButtonText: `Cancel`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
    
            
            const customer_details = {
              customer_name: this.CustomerName.value,
              phone_number: this.PhoneNumber.value,
              customer_email: this.Email.value,
              delivery_address: this.Address.value
            };
        
            
            
        
            
              const orderDetails = {
                items_count: this.items_count,
                items_total: this.sub_total,
                discount_percent: 0,
                discount_amount: this.discount_total,
                paf_charges: this.paf,
                total_amount: +this.order_amount + +this.paf,
                status: 1
              };
              const orderData = {
                customer_details: customer_details,
                order_detials: orderDetails,
                order_items: orderItems
              };
              
              this.isLoading = true;
              this.ngxService.start();
              this.services.createOrder(orderData).subscribe(response => {
                console.log(response);
                Swal.fire('Thanks for your order! Your order has been placed', '', 'success');
                this.resetFields();
                this.isLoading = false;
                this.ngxService.stop();
              });
            
           
           
          } 
        });
      } else {
        this.snackBar.open('Please add any one of Items', '', {
          duration: 3000
        });
        
      }
      
    } else {
      this.snackBar.open('Invalid Phone Number!', '', {
        duration: 3000
      });
      
    }
    

  }

  resetFields() {
    this.CustomerName.setValue('');
    this.PhoneNumber.setValue('');
    this.Email.setValue('');
    this.Address.setValue('');
    
    this.groupProducts.forEach(item=> {
      item.product_data.forEach(product => {
        product.p_quantity = 0;
      });
    });


    this.order_amount = 0.00;
    this.sub_total = 0.00;
    this.discount_total = 0.00;
    this.items_count = 0;
  }

  getOrderTotal() {
    return this.order_amount + Number(this.paf);
  }

 

  openImage(imgSrc: string) {
    window.open(imgSrc,'_blank');
    console.log(imgSrc);
  }

  onChangeLanguage() {
    this.isEnglishLanguage = !this.isEnglishLanguage;
  }
}
