import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Pickup-Call', url: '/pickup-call', icon: 'call' },
    { title: 'Pending', url: '/pickup-calls', icon: 'time' },
    { title: 'About', url: '/about', icon: 'information-circle' }
  ];

  
  constructor() {}

  ngOnInit() {}
}
