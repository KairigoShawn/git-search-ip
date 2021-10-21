import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private BASE_URL = 'https://api.github.com';
  private token = "token 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";

  constructor(private http: HttpClient)  {}

  //findUser

  async user(username?: string){
    const option = {
      headers: {Authorization: this.token}
    };

    return this.http.get(this.BASE_URL + `/users/${username}`, option);
  }
}
