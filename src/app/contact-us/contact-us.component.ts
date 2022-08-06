import { Component, OnInit } from '@angular/core';
import { SceenSizeServicesService } from '../shared/sceen-size-services.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  isDesktop: boolean | undefined;
  constructor(private screenSizeServices: SceenSizeServicesService) { 
    this.screenSizeServices.isDesktopView().subscribe(isDektop => {
      this.isDesktop = isDektop;
    });
  }

  ngOnInit() {
  }

}
