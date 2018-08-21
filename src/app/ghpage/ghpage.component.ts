import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ghpage } from '../ghpage';
import { Repo } from '../repo';
// import { User } from '../user';
import { UserComponent } from '../user/user.component';
import { environment } from '../../environments/environment';
import { UserRequestService } from '../user-http/user-request.service';
@Component({
  selector: 'app-ghpage',
  templateUrl: './ghpage.component.html',
  providers: [UserRequestService],
  styleUrls: ['./ghpage.component.css']
})
export class GhpageComponent implements OnInit {
  ghpage: Ghpage;
  repo: Repo;
  repos = [];

  constructor(private http: HttpClient, private userService: UserRequestService) {
  }

  ngOnInit() {
    this.userService.userRequest();
    this.ghpage = this.userService.ghpage;

    // this.userService.GetRepository();
    // this.repo = this.userService.repo;
    // console.log(this.repo);
  // }
  // }
    interface ApiResponse {
      data: any;
      login: any;
      avatar_url: any;
      full_name: string;
      description: string;
      length: any;
      html_url: any;
}
  // this.http.get<ApiResponse>('https://api.github.com/users/BrianNgeno?access_token=2b123e7e188464c6df4b5cc9e1b95747706d4bc1')
  //   .subscribe(data => {
  //     this.ghpage = new Ghpage(data.avatar_url, data.login);
  //   });
  this.http.get<ApiResponse>('https://api.github.com/users/BrianNgeno/repos?access_token=2b123e7e188464c6df4b5cc9e1b95747706d4bc1')
    .subscribe(y => {
      for (let index = 0; index < y.length; index++) {
  // console.log(y[index].full_name);
  this.repos.push(this.repo = new Repo(y[index]));
  // console.log(this.repos);
    }
  });

}
}
