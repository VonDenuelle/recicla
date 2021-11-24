import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from 'src/app/services/session.services';
import { ProfilePageForm } from './profile.page.form';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  form: FormGroup
  constructor(private formBuilder: FormBuilder, public session: Session) { }

  ngOnInit() {
    this.form = new ProfilePageForm(this.formBuilder).createForm()
  }

  name1 = this.session.firstName + ' ' + this.session.lastName
  email = this.session.email
  cont = this.session.contactNo
  usn = this.session.username
  

  update(){

    let name = this.form.get('name')
    let email = this.form.get('email')
    let cont = this.form.get('cont')
    let usn = this.form.get('usn')

    this.name1 =name.value
    this.email = email.value
    this.cont = cont.value
    this.usn = usn.value
  }
}
