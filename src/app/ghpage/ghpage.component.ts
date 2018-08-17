import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ghpage } from '../ghpage';
@Component({
  selector: 'app-ghpage',
  templateUrl: './ghpage.component.html',
  styleUrls: ['./ghpage.component.css']
})
export class GhpageComponent implements OnInit {
  ghpage: Ghpage;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    interface ApiResponse {
      data: any;
      login: any;
      avatar_url;
    }
    this.http.get<ApiResponse>('https://api.github.com/users/BrianNgeno?access_token=2b123e7e188464c6df4b5cc9e1b95747706d4bc1')
      .subscribe(data => {
        console.log(data.avatar_url);
        this.ghpage = new Ghpage(data.avatar_url, data.login);
      });
  }

}
