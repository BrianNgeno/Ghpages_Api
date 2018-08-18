import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  repo: Repo;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get('https://api.github.com/users/BrianNgeno?access_token=2b123e7e188464c6df4b5cc9e1b95747706d4bc1')
    // .subscribe(text => {
      // console.log(text);
      // this.repo = new Repo(text);
    // });
  }

}
