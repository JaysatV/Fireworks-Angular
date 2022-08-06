import { Component, OnInit } from '@angular/core';
import { HttpBackendServiceService } from 'src/app/services/HttpBackendService.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {
  NewArrivalsData: any[] = [];
  constructor(private services: HttpBackendServiceService) { }

  ngOnInit() {
    this.services.getNewArrivals().subscribe(response =>{
      
      this.NewArrivalsData = response;
      
    });
  }

  getImage(nals: any) {
    return this.services.restImageUrl + 'products/p_' + nals.id + '.jpg'; 
  }


}
