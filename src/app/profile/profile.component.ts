import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName! : any;
  userRepo! : any;

  constructor(private http: ProfileService) { }

  async findUser(user: any){


    (await this.http.user(user)).subscribe((data: any) => {

      this.userName = { ...data };
    });

  }

  async findRepo(repo: any){


    (await this.http.repo(repo)).subscribe((data: any) => {

      this.userRepo = { ...data };
    });

  }

  ngOnInit(): void {
  }

}
