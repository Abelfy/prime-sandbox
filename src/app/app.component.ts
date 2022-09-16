import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'ps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Sandbox - PrimeNG';

  items: MenuItem[];

  ngOnInit() {
    this.items = this.items = [
      {
        label : 'Demos',
        icon : 'pi pi-fw pi-home',
        items : [
          {
            label: 'Forms',
            icon : 'pi pi-fw pi-home',
            routerLink : ['/cva'],
          },
          {
            label: 'Redis',
            icon : 'pi pi-fw pi-database',
            routerLink : ['/redis'],
          },
          {
            label: 'NIR',
            icon : 'pi pi-fw pi-database',
            routerLink : ['/nir'],
          },
          {
            label: 'Virtual Scroll',
            icon : 'pi pi-fw pi-database',
            routerLink : ['/virtual-scroll'],
          }
        ]
        
      }
  ];
}



}
