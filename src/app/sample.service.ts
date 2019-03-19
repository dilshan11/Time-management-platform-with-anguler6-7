import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private messagesource = new BehaviorSubject('');
  currentmseeage = this.messagesource.asObservable();
  constructor(private http: HttpClient) { }
  changeMessage(message) {
    this.messagesource.next(message);
  }
  saveUser(user) {
    console.log(user);
   return this.http.post('http://localhost:8080/calander/saveUser', user);
  }
  checklogin(log) {
    return this.http.post('http://localhost:8080/calander/log', log);
  }
  savetheday(day) {
    return this.http.post('http://localhost:8080/calander/log', day);
  }
  saveuser_day(day) {
    return this.http.post('http://localhost:8080/calander/saveday', day);
  }
  noteday(note) {
    return this.http.post('http://localhost:8080/calander/note', note);
  }
  geyalldetails(userdatils){
    return this.http.post('http://localhost:8080/calander/getall', userdatils);
  }
}
