import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { UserRequestService } from '../user-http/user-request.service';
import { Search } from '../search';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserRequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  search: Search;
  searchs = [];

  constructor(private http: HttpClient) { }
  User = new User('');
  // Search = new Search('');

  Search(get) {
    this.http.get<object>('https://api.github.com/users/' + get.value + '?access_token=2b123e7e188464c6df4b5cc9e1b95747706d4bc1')
      .subscribe(x => {
        this.user = new User(x);
        console.log(this.user.search);
      });
    interface Object {
      length: any;
    }
    this.http.get<Object>('https://api.github.com/users/' + get.value + '/repos')
      .subscribe(y => {
        for (let index = 0; index < y.length; index++) {
        this.searchs.push(this.search = new Search(y[index]));
          console.log(y[index]);
        }
      });
  }

  ngOnInit() {

  }
}
