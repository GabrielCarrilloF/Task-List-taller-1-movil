import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageInformationService {
  private objetcS = new BehaviorSubject<{}>({});

  $getObjectSouces = this.objetcS.asObservable();
  constructor() { }

  senObjectSouces(data: any){
    this.objetcS.next(data);
  }
}
