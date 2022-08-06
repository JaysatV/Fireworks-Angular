import { Component, OnInit } from '@angular/core';
import { SceenSizeServicesService } from '../shared/sceen-size-services.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  isDesktop: boolean | undefined;
  constructor(private screenSizeServices: SceenSizeServicesService) { 
    this.screenSizeServices.isDesktopView().subscribe(isDektop => {
      this.isDesktop = isDektop;
    });
  }

  ngOnInit() {
  }

}
