import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [
    {
      title: 'Dashboard',
      route: '/home',
      icon: 'business',
    },
    {
      title: 'Admin',
      route: '/admin',
      icon: 'business',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('me bhi');
    
  }

}
