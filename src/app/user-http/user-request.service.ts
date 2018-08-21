import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Ghpage } from '../ghpage';
import { Repo } from '../repo';
// import {User} from '../user';
@Injectable()

export class UserRequestService {
  ghpage: Ghpage;
  repo: Repo;
// user: User;
  constructor(private http: HttpClient) {
    this.ghpage = new Ghpage('', '');
    // this.repo = new Repo([]);
    // this.user = new User('');
  }

  userRequest() {
    interface ApiResponse {
      data: any;
      login: any;
      avatar_url: any;
      full_name: string;
      description: string;
      length: any;
      html_url: any;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(data => {
        this.ghpage.ghpage = data.avatar_url,
          this.ghpage.user = data.login;
        resolve();
      },
        error => {
          this.ghpage.ghpage = 'avatar_url';
          this.ghpage.user = 'BrianNgeno';
          reject(error);
        });
    });
    return Promise;
  }

//     Search(get) {
// interface Search {
//   items: any;
// }
// const promise1 = new Promise((resolve, reject) => {
//
//       this.http.get<Search>(environment.apiUrl2 + get.value).toPromise().then(x => {
//         for (let index = 0; index < x.items.length; index++) {
//       this.user.search = x.items[index];
//       console.log(this.user.search);
//       resolve();
//     }
//   },
//     error => {
//       this.user.search = 'user';
//       reject(error);
//     });
//     });
//     return promise1;
//   }
//   GetRepository() {
//     interface Repositories {
//       re: any;
//       full_name: string;
//       description: string;
//       length: any;
//       html_url: any;
//     }
//
//       const promise2 = new Promise((resolve, reject) => {
//         this.http.get<Repositories>(environment.apiUrl1).toPromise().then(re => {
//           // for (let index = 0; index < this.repo.length; index++) {
//         this.repo.cont = new Repo(re).cont;
//         console.log(this.repo.cont);
//             resolve();
//           },
//           error => {
//             this.repo.cont = 'repositories';
//             reject(error);
//           }
//       );
//
//         return promise2;
//     });
// }
}
