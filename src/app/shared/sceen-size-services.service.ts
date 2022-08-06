import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SceenSizeServicesService {

  private isDesktop = new BehaviorSubject(false);
  constructor() { }

  onResize(size: any) {
    console.log('size: ' , size);
    if(size < 768) {
      this.isDesktop.next(false);
    } else {
      this.isDesktop.next(true);
    }
  }

  isDesktopView(): Observable<boolean> {
    return this.isDesktop.asObservable().pipe(distinctUntilChanged());
  }
}
