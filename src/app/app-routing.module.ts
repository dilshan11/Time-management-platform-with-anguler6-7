import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from './map/map.component';
import {RegisterComponent} from './register/register.component';
import {LogComponent} from './log/log.component';

const routes: Routes = [
  {path: 'mycalender', component: MapComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'log', component: LogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
