import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truck-dashboard',
  templateUrl: './truck-dashboard.component.html',
  styleUrls: ['./truck-dashboard.component.scss'],
})
export class TruckDashboardComponent implements OnInit {
  items = [
    {
      title: 'Master',
      route: '/truck/master',
      icon: 'directions_car',
    },
    {
      title: 'Driver',
      route: '/truck/driver',
      icon: 'account_circle',
    },
   
  ];
  constructor() {}

  ngOnInit(): void {}
}
