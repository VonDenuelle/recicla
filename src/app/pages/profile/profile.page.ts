import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilePageForm } from './profile.page.form';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  form: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new ProfilePageForm(this.formBuilder).createForm()
  }

  name1 = "Von Denuelle L. Tandoc"
  age1 = "20"
  bio1 = "I am a Gordon College Student"
  
  update(){
    let name = this.form.get('name')
    let age = this.form.get('age')
    let bio = this.form.get('bio')

    this.name1 =name.value
    this.age1 = age.value
    this.bio1 = bio.value
  }
}
