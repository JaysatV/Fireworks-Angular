import { GroupProducts, Product } from './../price-list/price-list.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpBackendServiceService {

constructor(private http: HttpClient) { }

configUrl = 'https://backend.dharshinicrackersshop.in/public/api/';
restImageUrl = 'https://backend.dharshinicrackersshop.in/public/images/';
headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

getProducts() {
    return this.http.get<Product[]>(this.configUrl + 'products',{
        headers: this.headers
    });
  }

  getCategories() {
    return this.http.get<any[]>(this.configUrl + 'categories',{
        headers: this.headers
    });
  }

  getNewArrivals(): Observable<any> {
    return this.http.get<any>(this.configUrl + 'new_arr', {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      });
  }

  getGroupProducts() {
    return this.http.get<GroupProducts[]>(this.configUrl + 'products/group',{
        headers: this.headers
    });
  }

  createOrder(orderData: any) {
    return this.http.post<any>(this.configUrl + 'orders',orderData,{
        headers: this.headers
    });
  }

  getOrder(phone_number: any) {
    return this.http.get<any>(this.configUrl + 'orders/' + phone_number,{
        headers: this.headers
    });
  }

  getLatestSettings() {
    return this.http.get<any>(this.configUrl + 'settings/latest',{
        headers: this.headers
    });
  }
}


 
