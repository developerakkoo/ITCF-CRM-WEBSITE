import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dash', url: '/folder', icon: 'mail' },
    { title: 'Analytics', url: '/analytics', icon: 'bar-chart' },
    { title: 'Team', url: '/team', icon: 'people' },
    { title: 'Subject Matter', url: '/subject-matter', icon: 'school' },
    { title: 'Associate Member', url: '/associate-matter', icon: 'walk' },
    { title: 'Professional Member', url: '/professional-matter', icon: 'ribbon' },
  ];
  constructor() {}
}
