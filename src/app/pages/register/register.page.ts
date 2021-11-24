import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from 'src/app/services/session.services';
import { UserService } from 'src/app/services/user.services';
import { RegisterPageForm } from './register.page.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup
  response : any;

  constructor(private router: Router,private formBuilder: FormBuilder, public session:Session, private userService: UserService) { }

  ngOnInit() {
    this.form = new RegisterPageForm(this.formBuilder).createForm()
  }

  register(){
    this.userService.registerPOST(this.form.value)
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

}
