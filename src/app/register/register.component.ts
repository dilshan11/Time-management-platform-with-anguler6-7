import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SampleService} from '../sample.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  a;
  a1;
  buttonexit = false;
  user = new FormGroup({
    fullname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    repassword: new FormControl()
  });
  constructor(private myservice: SampleService, private route: Router) { }

  ngOnInit() {
  }
  saving() {
     this.a = this.user.value;
      this.a1 = {fullname: this.a.fullname , email: this.a.email , password: this.a.password};
      console.log(this.a1);
     if (this.a.password === this.a.repassword) {
       this.myservice.saveUser(this.a1).subscribe(data => {
         console.log('as');
         this.route.navigate(['/log']);
       });
     } else {
       this.buttonexit = true;
     }
  }
}
