import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private BASE_URL = 'https://api.github.com';
  private token = environment.token;

  constructor(private http: HttpClient)  {}

  //findUser

  async user(username?: string){
    const option = {
      headers: {Authorization: this.token}
    };

    return this.http.get(this.BASE_URL + `/users/${username}`, option);
  }
}
