import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  API = "http://localhost:3000";

  API_WAT = "http://localhost:3000/wat"

  messageFromApi : string = "";
  messageFromApiWat : string = "";

  constructor(private _http: Http){}

  ngOnInit() {
    this.getApiResponse();
    this.getApiWatResponse();
  }

  getApiResponse() {
    this._http.get(`${this.API}`)
    .map(res => res.text())
    .subscribe((responseAsString) => {
      this.messageFromApi = responseAsString;
    });
  }

  getApiWatResponse() {
    this._http.get(`${this.API_WAT}`)
      .map((res) => res.text())
      .subscribe((responseAsString) => {
        this.messageFromApiWat = responseAsString;
      })
  }

}
