import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName! : any;

  constructor(private http: ProfileService) { }

  async findUser(user: any){

    console.log('User ::', user);
    (await this.http.user(user)).subscribe((data: any) => {
      console.log(data);
      this.userName = { ...data };
    });

  }

  ngOnInit(): void {
  }

}
