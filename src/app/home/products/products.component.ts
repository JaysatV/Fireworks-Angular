import { Component, OnInit } from '@angular/core';
import { HttpBackendServiceService } from 'src/app/services/HttpBackendService.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private services: HttpBackendServiceService) { }

  CatData: any[] = [];
  ngOnInit() {
    this.services.getCategories().subscribe(response => {
      this.CatData = response.filter(obj => obj.visibility != '0');
    });
  }

  getCatImage(cat: any): string {
    return this.services.restImageUrl + 'cat/p_' + cat.id + '.jpg';
  }
}
