import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Applicant-Id' : 'gAHra2TrHNXA7LMX',
    'Application-Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhc2Rhc2Rhc2Rhc2Rhc2Rhc2QifQ.2cOfI5PKBkkYI8rFHyPhxgn9oPEXfoVPwO16_xfPQ6Y'
  })
};


@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(private http: HttpClient) { }

  simulateFight(): Observable<any> {
    return this.http.post('https://developer.webstar.hu/rest/frontend-felveteli/simulate/', httpOptions);
  }
}
