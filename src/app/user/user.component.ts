import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // user: User;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //   Search(get) {
    //     this.http.get('https://api.github.com/search/users?q=' + get.value)
    //       .subscribe(x => {
    //         for (let index = 0; index < x.length; index++) {
    //         console.log(x);
    //         this.user = new User(x);
    //       });
    //   }
    // }

  }
}
