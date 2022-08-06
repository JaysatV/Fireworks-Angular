import { Platform } from '@angular/cdk/platform';
import { Component, HostListener } from '@angular/core';
import { SceenSizeServicesService } from './shared/sceen-size-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FireworksCustomer';

  phone_no = "8072260883";

  isShown:boolean = false;
  isDesktop: boolean | undefined;
  constructor(private screenSizeServices: SceenSizeServicesService,
        
    ) {
  
      this.screenSizeServices.isDesktopView().subscribe(isDektop => {
        console.log('is Desktop changed: ', isDektop);
        this.isDesktop = isDektop;
      });
  }

  ngOnInit(): void {
    this.screenSizeServices.onResize(window.innerWidth);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.screenSizeServices.onResize(event.target.innerWidth);
  }
}


