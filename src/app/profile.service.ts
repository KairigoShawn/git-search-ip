import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { profile } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // private url = 'https://api.github.com/users/daneden?access_token=' + apiKey //

  constructor(http: HttpClient)  {

  }
}
