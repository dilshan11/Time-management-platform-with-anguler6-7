import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
    exist = true;
  constructor(private service: SampleService) { }

  ngOnInit() {
    this.service.currentmseeage.subscribe(message => {
      let a = message;
      if (typeof a === 'object') {
        this.exist = false;
      }
    });
  }

}
