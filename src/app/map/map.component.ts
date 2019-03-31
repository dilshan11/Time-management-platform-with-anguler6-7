import { Component, OnInit } from '@angular/core';
import {count} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {SampleService} from '../sample.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  real = [];
  a;
  c;
  day = new FormGroup({
    frist: new FormControl(),
    second: new FormControl(),
    thrid: new FormControl()
  });
  user_day;
  monthdetails;
  user;
  date;
  dataor: object = [];
//  s: object = [1, 2, 3, 4];
  tu: object = [];
  we: object = [];
  th: object = [];
  fr: object = [];
  sa: object = [];
  su: object = [];
  mo: object = [];
  exist = false;
  selecteddate: number;
  currentdate;
  stricurrentname;
  currentmonth: number;
  week: object = [this.tu , this.we , this.th , this.fr , this.sa , this.su , this.mo];
  nomonth: object = [31 , 28 , 31 , 30 , 31, 30, 31, 31, 30, 31, 30, 31];
  strimonth: object = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];
  constructor(private service: SampleService) { }
  ngOnInit() {
    this.currentdate = new Date().getDate();
     this.currentmonth = new Date().getMonth();
     this.stricurrentname = this.strimonth[this.currentmonth];
      this.fixdatetomonth(new Date().getMonth());
      this.getuser();
      this.getalldetails();
  }
  getalldetails() {
    this.real = [];
    const userdetails = {email: this.user.email, month: this.stricurrentname};
    this.service.geyalldetails(userdetails).subscribe(data => {
      console.log(data);
      this.monthdetails = data;
      for (let i = 0; i < this.monthdetails.length; i++) {
      const a = this.monthdetails[i].month;
      if (this.monthdetails[i].frist === 'free') {
        this.monthdetails[i].frist = 0;
      } else {
        this.monthdetails[i].frist = 1;
      }
      if (this.monthdetails[i].second === 'free') {
        this.monthdetails[i].second = 0;
      } else {
        this.monthdetails[i].second = 1;
      }
      if (this.monthdetails[i].third === 'free') {
        this.monthdetails[i].third = 0;
      } else {
        this.monthdetails[i].third = 1;
      }
      this.c = a.substring(this.stricurrentname.length, a.length);
      this.real[this.c] = this.monthdetails[i];
    }
    for (let n = 1; n <= 31; n++) {
      if (this.real[n] == null) {
        this.real[n] = {frist: ''};
      }
    }
  });
  }

  getuser() {
    this.service.currentmseeage.subscribe(message => {
      this.user = message;
    });
  }
  viewdate(a) {
    this.selecteddate = a;
    this.exist = true;
}
  makedefault() {
    this.dataor = [];
    this.tu = [];
    this.we = [];
    this.th = [];
    this.fr = [];
    this.sa = [];
    this.su = [];
    this.mo = [];
    this.week = [this.tu , this.we , this.th , this.fr , this.sa , this.su , this.mo];
  }
  gotoprevious() {
    if (this.currentmonth !== 0) {
      this.makedefault();
      this.currentmonth = this.currentmonth - 1;
      this.stricurrentname = this.strimonth[this.currentmonth];
      this.fixdatetomonth(this.currentmonth);
      this.getalldetails();
    }
}
  gotonext() {
    if (this.currentmonth !== 11) {
      this.makedefault();
      this.currentmonth = this.currentmonth + 1;
      this.stricurrentname = this.strimonth[this.currentmonth];
      this.fixdatetomonth(this.currentmonth);
      this.getalldetails();
    }
  }
  fixdatetomonth (mon: number) {
    const mon1 = this.nomonth[mon];
    let cou = this.findingfrsitdate(mon);
     this.dataexist(cou);
    let a = 0;
    let count1 = 0;
    for (let i = 1; i <= mon1; i++) {
      if (cou >= 7) {
        cou = 0;
      }
      if (count1 >= 7 ) {
        a++;
        count1 = 0;
      }
      count1++;
      this.week[cou][a] = i;
      cou++;
    }
  }
  dataexist(cou) {
  let days;
    if (cou < 5) {
       days = 2 + cou;
    }
    if (cou > 4 ) {
      days = cou - 5;
    }
    for (let i = 0; i < days; i++) {
        this.dataor[i] = true;
    }
  }
  findingfrsitdate(mon) {
    let dayamount = 0;
    for (let i = 0; i < mon ; i++) {
      dayamount = dayamount + this.nomonth[i];
    }
   // console.log(dayamount % 7);
    return dayamount % 7;
  }
  savedate() {
      const a1 = this.day.value;
        this.user_day = {
          userDto : this.user,
          dayDto: {day: this.stricurrentname + this.selecteddate, month: this.stricurrentname},
          frist: a1.frist,
          second: a1.second,
          third: a1.thrid,
          month: this.stricurrentname
        };
      this.service.saveuser_day(this.user_day).subscribe(mn => {
      });
      this.exist = false;
  }
}
