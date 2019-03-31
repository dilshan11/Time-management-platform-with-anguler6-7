import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends;
  constructor(private service: SampleService, private route: Router) { }

  ngOnInit() {
    this.service.getallfriends().subscribe(data => {
      console.log(data);
      this.friends = data;
    });
  }
  getfriends(a) {
    a = {password: a.password, fullname: a.email, email: a.fullname};
    this.service.changeMessage(a);
    this.route.navigate(['/mycalender']);
  }
}
