import { Component, Input, OnInit } from '@angular/core';


export interface SideNav {
  title: string,
  route: string
  icon: string
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() items: any[] =[]
  constructor() {}

  ngOnInit() {}
}
