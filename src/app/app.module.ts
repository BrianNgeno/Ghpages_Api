import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GhpageComponent } from './ghpage/ghpage.component';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { UserComponent } from './user/user.component';
import {UserRequestService} from './user-http/user-request.service';
import {RoutingModule} from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GhpageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    RoutingModule
  ],

  providers: [UserRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
