import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'main',
          url: '/',
        },
        {
          title: 'ProgressBar',
          url: 'progress',
        },
        {
          title: 'Graficas',
          url: 'grafica1',
        },
      ],
    },
  ];

  constructor() {}
}
