import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { GhpageComponent } from '../ghpage/ghpage.component';


const routes: Routes = [
  { path: 'ghpages', component: GhpageComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
