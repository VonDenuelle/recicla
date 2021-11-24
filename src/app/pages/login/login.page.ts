import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Session } from 'src/app/services/session.services';
import { UserService } from 'src/app/services/user.services';
import { AppState } from 'src/store/AppState';
import { hide, show } from 'src/store/loading/loading.actions';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup
  response: any

  constructor(public session: Session, private userService: UserService, private router: Router, private formBuilder: FormBuilder, private store: Store<AppState>, private http: HttpClient) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm()
  }


  forgotEmailPassword(){
    this.store.dispatch(show())
    setTimeout(()=>{
      this.store.dispatch(hide())
    },3000)
  }

  login(){
    this.userService.loginPOST(this.form.value)
      .subscribe((response: any) => {
        console.log(response.message);
        // redirect to home page
        // check if session id is in response
        if (response.id != null) {
          this.session.id = response.id;
          this.session.firstName = response.firstName;
          this.session.lastName = response.lastName;
          this.session.email = response.email;
          this.session.contactNo = response.contactNo;
          this.session.username = response.username;
    console.log(this.session.firstName)

          this.router.navigate(['home']);
        } else {
          this.response = response.message;
        } 
     }, error =>{
       console.log(error);
     });
  }

  register(){
    this.router.navigate(['register']);
  }
}
