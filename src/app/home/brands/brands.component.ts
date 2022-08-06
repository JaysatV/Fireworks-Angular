import { Component, OnInit } from '@angular/core';
import { SceenSizeServicesService } from 'src/app/shared/sceen-size-services.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  isDesktop: boolean | undefined;
  constructor(private screenSizeServices: SceenSizeServicesService) { 
    this.screenSizeServices.isDesktopView().subscribe(isDektop => {
      
      this.isDesktop = isDektop;
    });
  }

  ngOnInit() {
    
  }

}
