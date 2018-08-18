import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GhpageComponent } from './ghpage/ghpage.component';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { UserComponent } from './user/user.component';

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
    NgProgressHttpModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
