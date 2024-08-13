import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageInformationService  } from '../services/page-information.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any[] = [];
  constructor(
    private router: Router,
    private pageInformation: PageInformationService 
  ) {}

  ngOnInit() {
    this.pageInformation.$getObjectSouces.subscribe(data => {
      if (!Array.isArray(data)) {
        this.data = [data];
      } else {
        this.data = data;
      }
    });
  }

}
