import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SceenSizeServicesService } from '../shared/sceen-size-services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  isDesktop: boolean | undefined;
  constructor(private screenSizeServices: SceenSizeServicesService,
        
    ) {
  
      this.screenSizeServices.isDesktopView().subscribe(isDektop => {
        console.log('is Desktop changed: ', isDektop);
        this.isDesktop = isDektop;
      });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('page load finished');
  }
  title = 'FireworksCustomer';

  phone_no = "8072260883";

  isShown:boolean = false;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  onClickWhatsapp() {

  }
}
