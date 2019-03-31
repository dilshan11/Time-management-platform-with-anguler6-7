import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from './map/map.component';
import {RegisterComponent} from './register/register.component';
import {LogComponent} from './log/log.component';
import {FriendsComponent} from './friends/friends.component';

const routes: Routes = [
  {path: 'mycalender', component: MapComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'log', component: LogComponent},
  {path: 'friends', component: FriendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
