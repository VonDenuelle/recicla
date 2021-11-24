import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

    private _url: string = 'http://localhost/api/user/';
  constructor(private http: HttpClient) { }

loginPOST(user){
      return this.http.post(this._url+'login.php', user)
}

registerPOST(user){
      return this.http.post(this._url+'register.php', user)
}

}
