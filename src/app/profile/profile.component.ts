import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo!: any;
  userRepo = [];
  radio = {
    userInfo: '',
    usersRepos: '',
  };
  radioSelected = '';

  constructor(private http: ProfileService) { }

  async findUser(user: any){
    (await this.http.user(user)).subscribe((data: any) => {
      this.userInfo = { ...data };
    });
  }

  async searchGithub(username: string) {
    if(this.radioSelected === 'user_repository'){
      return (await this.http.repo(username)).subscribe((data: any) => {
        this.userRepo = data;
        console.log(data);

      });
    }

    return (await this.http.user(username)).subscribe((data: any) => {
      this.userInfo = { ...data };
    });

  }

  async findRepo(repo: any){


    (await this.http.repo(repo)).subscribe((data: any) => {

      this.userRepo = data;
    });

  }

  onRadioSelected(e: any) {
    this.radioSelected = e.target.value;
  }

  ngOnInit(): void {
  }

}
