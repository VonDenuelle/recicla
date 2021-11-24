import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/services/session.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firstName:any = this.session.firstName;
  lastName:any = this.session.lastName; 
  email:any = this.session.email;
  constructor(public session: Session, private router: Router) { }

  ngOnInit() {

  }
  goToPickupCalls(){
    this.router.navigate(['pickup-calls'])
  }
  newPickupCall(){
    this.router.navigate(['pickup-call'])
  }
}
