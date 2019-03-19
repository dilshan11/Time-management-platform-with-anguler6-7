import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SampleService} from '../sample.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  exitbutton = false;
  log1 = new FormGroup({
    ema: new FormControl(),
    password1: new FormControl()
  });
  constructor(private myservice: SampleService, private route: Router) { }

  ngOnInit() {
  }
  check1() {
      this.myservice.checklogin(this.log1.value).subscribe(data => {
        if (data === null) {
           this.exitbutton = true;
        } else {
          this.myservice.changeMessage(data);
          this.route.navigate(['/mycalender']);
        }
      });
  }

}
